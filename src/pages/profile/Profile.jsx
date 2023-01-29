import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import './Profile.css';

function Profile(props) {
  const {user: {firstname, lastname, username, email}} = useContext(AuthContext);

  return (
    <>
      <h1 className="profile-header">User profile</h1>
      <div className="container profile-container">
        <p>Name: {firstname} {lastname}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    </>
  );
}

export default Profile;