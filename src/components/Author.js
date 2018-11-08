import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Author = (props) => {
    const details = props.details;
    return (
        <div className="Author-wrapper">
            <Link to={`/profile/${details.login.uuid}`} >
                <img className="avatar" src={details.picture.medium} />
            </Link>
        </div>
    );
}

export default Author;