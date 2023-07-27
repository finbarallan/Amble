

import React, { useState } from 'react';
import axios from 'axios';
import "./login.css";
import CloseIcon from '@mui/icons-material/Close';
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Alert, AlertTitle } from '@mui/material';
import Box from "@mui/material/Box";



const Login = () => {
  const navigate = useNavigate();

  const [errorVisible, seterrorVisible] = useState(false);
  const [passVisible, setpassVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

 const handleClose_error = () => {
    seterrorVisible(false);
  };

  const handleClose_pass = () => {
    setpassVisible(false);
  };

   // Automatically close the alert after 3000 milliseconds (3 seconds)
   setTimeout(handleClose_error, 5000);

    // Automatically close the alert after 3000 milliseconds (3 seconds)
  setTimeout(handleClose_pass, 5000);


  const togglehomepage = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    password: '',
  });

  const errorMessageElement = document.getElementById("error-message");

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
    .post('/users/registration', formData, {
      // Need this header as axios sends Form data as application/json which is not compatible with django request.POST
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      if (error.response.status === 400) {
        console.log("It may be that Username already exists.");
        setErrorMessage("Username already exists! Please try entering a different email.");
        // const errorMessage = "Username already exist! Please try entering a different email.";
        seterrorVisible(true);
        // errorMessageElement.textContent = errorMessage;
      } else if (error.response) {
        console.log(error.response);
        console.log("server responded");
        seterrorVisible(true);
      } else if (error.request) {
        console.log("network error");
        seterrorVisible(true);
      } else {
        console.log(error);
        seterrorVisible(true);
      }
    });
  };

  return (
    <div >
      <div className="login-area-signup">
        <div className="additional-block-close-login" onClick={togglehomepage}>
                <CloseIcon sx={{ fontSize: 35 , color: 'white' }} />
              </div>
       

      <div>
      {/* <div id="error-message"></div> */}

      {errorVisible && (
          <Alert severity="error" onClose={handleClose_error}>{errorMessage}</Alert>
      )}

        <h1 className="signup-text1">Sign up for a free account</h1>
        <p className="signup-text2">
          Already have an account yet?{" "}
          <Link to="/loginCheck" className="signup-text3">
            Sign in.
          </Link>
        </p> 
        </div>
    <form onSubmit={handleSubmit}>
            <div className='firstnamebox-signup'>
            <label htmlFor="first_name">First Name:</label>
            <input
                type="text"
                name="first_name-signup"
                className='first_name-signup'
                id="first_name-signup"
                // value={formData.first_name}
                onChange={handleChange}
                ></input>
            </div>
            <div className='lastnamebox-signup'>
            <label  htmlFor="last_name-signup">Last Name:</label >
            <input
                type="text"
                name="last_name-signup"
                className='last_name-signup'
                // value={formData.last_name}
                onChange={handleChange}
                ></input>
            </div>
           
            <div className='usernamebox-signup'>
                <label htmlFor="username-signup">Email (will be your username):</label>
                <input
                    type="text"
                    name="username-signup"
                    className='username-signup'
                    id="username-signup"
                    // value={formData.email}
                    onChange={handleChange}
                    ></input>
            </div>

            <div className='addressbox-signup'>
                <label htmlFor="address-signup">Address:</label>
                <input
                    type="text"
                    name="address-signup"
                    className='address-signup'
                    id="address-signup"
                    // value={formData.address}
                    onChange={handleChange}
                    ></input>
            </div>
            <div className='passwordbox-signup'>
                <label htmlFor="password-signup">Password:</label>
                <input
                    type="text"
                    name="password-signup"
                    className='password-signup'
                    id="password-signup"
                    // value={formData.password}
                    onChange={handleChange}
                    ></input>
            </div>
           
            <div className="wrapper-function-login">
    <a className="wrapper-function-text-login" href="#" type="submit" onClick={handleSubmit}><span>Sign Up</span></a>
    </div>
          
    </form>
    </div>
    </div>
  );
};

export default Login;