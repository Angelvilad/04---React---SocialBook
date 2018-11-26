import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import fullName from '../utils/utils';

const LinkStyled = styled(Link)`
    display: flex;
    text-decoration: none;
    color: black;
    margin: 15px;
    background-color: ${({theme}) => theme.colors.secondary};
    box-shadow: ${({theme}) => theme.colors.boxShadow};
    padding: 15px;
        
    & > .user-data-wrapper {
        text-transform: capitalize;
        padding-left: ${({theme}) => theme.padding.gutter};
    }

    & img {
        border-radius: 25%;
    }
`;

const Author = (props) => {
    const details = props.details;
    return (
        <div className={props.className}>
            <LinkStyled to={`/profile/${details.login.uuid}`} >
                <div className="img-wrapper">
                    <img className="avatar" alt="avatar" src={details.picture.medium} />
                </div>
                <div className="user-data-wrapper">
                    <p>{fullName(details)}</p>
                    <p>{details.location.city}, {details.location.state}</p>
                </div>                
            </LinkStyled>
        </div>
    );
}

export default styled(Author)`
    
`;