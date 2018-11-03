import React from 'react';
import {connect} from 'react-redux';

const AuthorsView = (props) =>
    <div className="Authors-wrapper">
        <ul>
            {
                props.authors.authors.map(author =>
                    <li key={author.login.uuid}>
                        <img src={author.picture.medium} />
                    </li>
                )
            }
        </ul>
    </div>

const Authors = connect(
    state => state
)(AuthorsView);

export default Authors;