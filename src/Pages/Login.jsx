import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
      //  creating State for input fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // creating states for error messages
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

      // Functions to handle changes of form value
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // validaion form fields
    const validateInputs = () => {
        let isValid = true;

        // Validate email
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Validate password
        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

      //handel coninue button click
    const handleContinueClick = () => {
        if (validateInputs()) {
            //navigating to home page
            navigate('/');
        }
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Login</h1>
                <div className="loginsignup-field">
                    <input
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {emailError && <p className="error-message">{emailError}</p>}
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                </div>
                <button onClick={handleContinueClick}>Continue</button>
                <p className="loginsignup-login">
                    Don't have an account?
                    {/* navigating to signup through link */}
                    <Link style={{ textDecoration: 'none' }} to='/signup'>
                        <span>Sign Up</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
