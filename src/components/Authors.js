import React from 'react';
import {connect} from 'react-redux';

import Author from './Author';

const AuthorsView = (props) =>
    <div className="Authors-wrapper">
        <ul>
            {
                props.authors.data.filter(author =>
                    author !== props.login.user
                ).map(author =>
                    <li key={author.login.uuid}>
                        <Author details={author}/>
                    </li>
                    )
            }
        </ul>
    </div>

const Authors = connect(
    state => ({
        login: state.login,
        authors: state.authors
    }),
)(AuthorsView);

export default Authors;