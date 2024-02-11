import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css'

export const CreateAccount = () => {

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [nameError, setNameError] = useState('');
    const [contactError, setContactError] = useState('');
    const [addressError, setAddressError] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const validateInputs = () => {
        let isValid = true;

        // Validate name
        if (!name) {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        // Validate contact
        if (!contact) {
            setContactError('Contact is required');
            isValid = false;
        } else if (!/^\d{10}$/.test(contact)) {
            setContactError('Contact must be a 10-digit number');
            isValid = false;
        } else {
            setContactError('');
        }

        // Validate address
        if (!address) {
            setAddressError('Address is required');
            isValid = false;
        } else {
            setAddressError('');
        }

        return isValid;
    };

    const handleContinueClick = () => {
        if (validateInputs()) {
            
            navigate('/');
        }
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Create Account</h1>
                <div className="loginsignup-field">
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={handleNameChange}
                    />
                    {nameError && <p className="error-message">{nameError}</p>}
                    <input
                        type='text'
                        placeholder='Contact'
                        value={contact}
                        onChange={handleContactChange}
                    />
                    {contactError && <p className="error-message">{contactError}</p>}
                    <textarea
                        placeholder='Address'
                        value={address}
                        onChange={handleAddressChange}
                    />
                    {addressError && <p className="error-message">{addressError}</p>}
                </div>
                <button onClick={handleContinueClick}>Continue</button>
                <p className="loginsignup-login">
                    Already have an account?
                    <Link style={{ textDecoration: 'none' }} to='/login'>
                        <span>Login</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
