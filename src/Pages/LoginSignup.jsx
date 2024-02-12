import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'

export const LoginSignup = () => {
  //  creating State for input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
// creating states for error messages
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');
  //initializing navigation  hooks
  const navigate = useNavigate();

  // Functions to handle changes of form value
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value)
  }


  // validaion form fields
  const validateInputs = () => {
    let isValid = true;

    // Validating email for empty and regex
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    } else {
      isValid = true;
      setEmailError('');
    }

    // Validate password for empty and regex
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      isValid = true;
      setPasswordError('');
    }

    // Validate confirm password for empty and regex
    if (!rePassword) {
      setRePasswordError('Confirm Password is required');
      isValid = false;
    } else if (rePassword !== password) {
      setRePasswordError("Confirm Password dose'nt match with the password");
      isValid = false;
    } else {
      isValid = true;
      setRePasswordError('');
    }

    return isValid;
  };

  //handel coninue button click
  const handleContinueClick = () => {
    if (validateInputs()) {
      //navigating to create account page
      navigate('/createAccount');
    }
  };


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">

          <div>
            <input type='email' placeholder='Email Address' value={email} onChange={handleEmailChange} />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div>
            <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <div>
            <input type='password' placeholder='Confirm Password' value={rePassword} onChange={handleRePasswordChange} />
            {rePasswordError && <p className="error-message">{rePasswordError}</p>}
          </div>

        </div>
        <button onClick={handleContinueClick}>Continue</button>
        {/* navigate using react dom link to login page */}
        <p className="loginsignup-login">Already have an account?<Link style={{ textDecoration: 'none' }} to='/login'><span>  Login Here</span></Link> </p>
      </div>
    </div>
  )
}
