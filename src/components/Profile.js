import React from 'react';
import {connect} from 'react-redux';

import fullName from '../utils/utils';

const ProfileView = (props) => {
    const [author] = props.authors.authors.filter(author =>
        author.login.uuid === props.match.params.uuidAuthor);
    return (
        <div className="Profile-wrapper">
            <h2>Perfil de <span className="full-name">{fullName(author)}</span></h2> 
            <img src={author.picture.large} />
        </div>
    );
}


const Profile = connect(
    state => state
)(ProfileView);
export default Profile;