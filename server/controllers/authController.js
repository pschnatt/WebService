const User = require('../models/user')
const Profile = require(`../models/profile`)
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')

//register endpoint
const registerUser = async(req, res) => {
  try {
      const {username, email, phonenumber ,password, cpassword} = req.body;
      //check if name was enter
      console.log(email)
      if (!username){
        return res.status(400).json({
          error: "name is required"
        })
      }
      const username_exist = await User.findOne({username})
      if(username_exist){
        return res.status(400).json({
          error: "Username already taken"
        })
      }
      //check password
      if (!password || password.length < 6){
          return res.status(400).json({
            error: "Password should be atleast 6 characters long"
          })
      }
      if(password != cpassword){
        return res.status(400).json({
          error: "Mismatched password"
        })
      }
      if (phonenumber.length != 10){
        return res.status(400).json({
          error: "Invalid phone number"
        })
      }

      //Check email
      const email_exist = await User.findOne({email});
      if(email_exist) {
        return res.status(400).json({
          error: "Email already taken"
        })
      }

      const phone_exist = await User.findOne({phonenumber});
      if (phone_exist){
        return res.status(400).json({
          error: "This phone number has already registered"
        })
      }

      const hashedPassword = await hashPassword(password)

      //create user database
      const user = await User.create({
        username,
        phonenumber,
        email,
        password: hashedPassword,
      })
      return res.status(200).json(user)

  } catch (error) {
      console.log(error)
  }
}

//login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: 'No User Found',
      });
    }

    // Check if password matches
    const match = await comparePassword(password, user.password);
    if (match) {
      // Check if profile exists
      var profile = await Profile.findOne({ username: user.username });
      if (!profile) {
        // Create a new profile if it doesn't exist
        const prof = await Profile.create({
          username: user.username,
          id : user.id,
          history : []
        });
        profile = await Profile.findOne({ username: user.username });
      }

      // Sign and send the JWT token
      jwt.sign({ email: user.email, 
                 id: user._id, 
                 username: user.username , 
                 history: profile.history,
                 uid: user.id 
                }, process.env.JWT_SECRET, {}, (err, token) => {
        if (err) {
          console.error(err);
          return res.status(400).json({ error: 'Error signing token' });
        }
        res.cookie('token', token).json(user); // Password match, then set cookie
      });
    } else {
      res.status(400).json({
        error: 'Password Mismatched',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProfile = (req,res) => {
  const {token} =req.cookies
  if(token) {
    jwt.verify(token,process.env.JWT_SECRET, {}, (err, user) => {
      if(err) throw err;
      res.json(user)
    })
  } else {
    res.json(null)
  }
}

const addHistoryEntry = async (req, res) => {
  try {
    const { user_id, newHistory } = req.body;
    const updatedProfile = await Profile.findOneAndUpdate(
      {id : user_id},
      {
        $push: { history: newHistory }, // Add a new entry to the history array
      },
      { new: true } // Return the updated document
    );

    console.log('Profile updated with new history:', updatedProfile);
  } catch (error) {
    console.error('Error updating profile with new history:', error);
  }
};

const logoutUser = (req, res) => {
  // Clear the authentication cookie
  res.clearCookie('token').json({ message: 'Logout successful' }).redirect('/');
};

module.exports = {
  registerUser,
  loginUser,
  addHistoryEntry,
  getProfile,
  logoutUser
}
