import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';

const SignUpForm = () => {
  const [data, setData] = useState({
    username: '',
    email:'',
    phoneNumber: '',
    password:'',
    cpassword: '',
  })

  const onSIGNINTextClick = async(e) => {
    e.preventDefault()
    const {username, email, phoneNumber, password, cpassword} = data
    try{
      const {data} = await axios.post('/register', {
        username, email, phoneNumber, password, cpassword
        });
        if (data.error) {
          toast.error(data.error)
        }
        else {
          setData({})
          toast.success('Sign Up Successful!')
          navigate('/login')
        }
      }catch (error) { console.log(error)}
    }

  return (
    <div className="signup-form-container">
      <form>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">phoneNumber:</label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            value={data.phoneNumber}
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={data.cPassword}
            onChange={(e) => setData({ ...data, cpassword: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="submit-button" onClick={onSIGNINTextClick}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
