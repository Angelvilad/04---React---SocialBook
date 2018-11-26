import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';

import Author from './Author';

const AuthorsView = (props) =>
    <div className={props.className}>
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

export default styled(Authors)`
    display: flex;
    justify-content: center;
    & ul {
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        & li {
            width: 100%;
            @media only screen and (min-width: 600px) {
                width: 50%;
              }
            @media only screen and (min-width: 1200px) {
                width: 33%;
              }
        }
    }
`;