import React, { useState } from 'react';
import './LoginForm.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; 


const LoginForm = () => {
  const [data, setData] = useState({
    email:'',
    password:''
  });

  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault()
    const {email, password} = data
    try{
      const {data} = await axios.post('/login', {
        email,password
        }, {
          withCredentials: true
        } );
        if (data.error) {
          toast.error(data.error)
        }
        else {
          setData({})
          toast.success('Login Successful!')
          navigate('/');
        }
      }
    catch (error) 
      { console.log(error)}
    }

  return (
    <div className="login-form-container">
      <form>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
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
        <button type="submit" className="submit-button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
