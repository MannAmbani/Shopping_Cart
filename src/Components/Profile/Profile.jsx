import React, { useState } from 'react'
import './Profile.css'

export const Profile = () => {
  //some hardcoded  data
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Mann Ambani');
  const [email, setEmail] = useState('mann.ambani007@gmail.com');
  const [contact, setContact] = useState('4376799353');
  const [address, setAddress] = useState('139 Jackson Ave');

  //handeling edit button
  const handleEditClick = () => {
    // setting edit true
    setIsEditing(true);
  };

  //handeling save button 
  const handleSaveClick = () => {
    // setting editing false
    setIsEditing(false);

  };

  return (
    <div className="profile">
    <div className="profile-container">
      <div className="profile-header">
        <h2>Your Profile</h2>
      </div>
      <div className="profile-info">
        <div className="profile-field">
          <label>Name: </label>
          {/* logic for changing  name based on isediting state and saving it*/}
          {isEditing ? (<input type="text" value={name} onChange={(e) => setName(e.target.value)} />) : (<span>{name}</span>)}
        </div>
        <div className="profile-field">
          <label>Email: </label>
          {/* logic for changing  email based on isediting state and saving it*/}
          {isEditing ? (<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />) : (<span>{email}</span>)}
        </div>
        <div className="profile-field">
          <label>Contact: </label>
          {/* logic for changing  contact based on isediting state and saving it*/}
          {isEditing ? (<input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />) : (<span>{contact}</span>)}
        </div>
        <div className="profile-field">
          <label>Address: </label>
          {/* logic for changing  address based on isediting state and saving it*/}
          {isEditing ? (<textarea value={address} onChange={(e) => setAddress(e.target.value)} />) : (<span>{address}</span>)}
        </div>
      </div>
      <div className="profile-buttons">
        {/* setting up buttons depending on isediting  */}
        {isEditing ? (<button onClick={handleSaveClick}>Save</button>) : (<button onClick={handleEditClick}>Edit Profile</button>)}
      </div>
    </div>
    </div>
  )
}
