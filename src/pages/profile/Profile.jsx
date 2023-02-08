import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import './Profile.css';

function Profile(props) {
  const {user: {username, email, roles}} = useContext(AuthContext);

  return (
    <>
      <h1 className="profile-header">User profile</h1>
      <div className="container profile-container">
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Role: {roles[0].name}</p>
      </div>
    </>
  );
}

export default Profile;