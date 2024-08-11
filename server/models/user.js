const mongoose = require('mongoose')
const {Schema} = mongoose
const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema({
  username: String,
  id: {
    type: String,
    default: uuidv4, 
    unique: true
  },
  phonenumber: {
    type: String,
    unique:true
  },
  email:{
    type: String,
    unique:true
  },
  password:String
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;