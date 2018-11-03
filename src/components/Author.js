import React from 'react';
import {connect} from 'react-redux';

const AuthorView = (props) =>
    <div className="Author-wrapper">
        <img className="avatar" src={props.author.picture.medium} />
    </div>

const Author = connect(
    state => state
)(AuthorView);

export default Author;