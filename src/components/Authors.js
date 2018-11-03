import React from 'react';
import {connect} from 'react-redux';

import Author from './Author';

const AuthorsView = (props) =>
    <div className="Authors-wrapper">
        <ul>
            {
                props.authors.authors.map(author =>
                    <li key={author.login.uuid}>
                        <Author author={author}/>
                    </li>
                )
            }
        </ul>
    </div>

const Authors = connect(
    state => state
)(AuthorsView);

export default Authors;