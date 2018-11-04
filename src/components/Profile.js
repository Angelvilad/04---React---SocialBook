import React from 'react';
import {connect} from 'react-redux';

const ProfileView = (props) =>
    <div className="Profile-wrapper">
        <p>Profile</p>   
        {/*<img src={author.picture.medium} />*/}
    </div>

const Profile = connect(
    state => state
)(ProfileView);
export default Profile;