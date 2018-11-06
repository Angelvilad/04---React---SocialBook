import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const AuthorView = (props) => {
    const details = props.details;
    return (
        <div className="Author-wrapper">
            <Link to={{
                pathname: `/profile/${details.login.uuid}`,
                state: {author: details}
            }} >
                <img className="avatar" src={details.picture.medium} />
            </Link>
        </div>
    );
}

const Author = connect(
    state => state
)(AuthorView);

export default Author;