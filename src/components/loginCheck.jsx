import React, { useState } from 'react';
import axios from 'axios';
import "./loginCheck.css";
import {Link, useNavigate} from 'react-router-dom';


const LoginCheck = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    console.log(username,password)
    e.preventDefault();
    setError('');

    // Make the POST request to the logincheck endpoint
    axios.post('users/logincheck', { username, password })
   
      .then((response) => {
        // Check with database if the username and password match up
        const check = response.data["checks"];
        console.log('Do the username and password match up =',response.data["checks"]);
        if (response.data["checks"][0] == true){
        console.log ('Hi',response.data["checks"][1],'and welcome back!')
      } else {
        console.log ('Username and password do not match.  Please try again')
      }
      })
      .catch((error) => {
        // Handle login error
        setError('Invalid email or password');
        console.log('Error:', error.response.data.error);
      });
  };

  return (
    <div className="login-area">
       <div>
      <h1 className='signin-text1'>Sign in to your account</h1>
      <p className='signin-text2'>
          Don't have an account yet? <Link to='/login' className='signin-text3'>Sign up.</Link>
      </p>
    </div>

      <form onSubmit={handleLogin}>
        <div>
          <label>Username (Email):</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="wrapper-function-signin">
    <a className="wrapper-function-text-signin" onClick={handleLogin} href="#" type="submit"><span>Sign In</span></a>
    </div>
        {error && <p>{error}</p>}

      </form>
    </div>
  );
};

export default LoginCheck;
