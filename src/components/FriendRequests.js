import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import FriendRequest from './FriendRequest';

const FriendRequestsView = (props) => {
    const authors = props.authors.data;
    const userId = props.user.login.uuid
    const dataUser = JSON.parse(localStorage.getItem(userId));
    const friendRequestReceivedId = dataUser.friendRequestReceived
    let friendRequesters = []
    
    friendRequestReceivedId.forEach((authorId) => {
        const [authorRequester] = authors.filter( author => author.login.uuid === authorId);
        friendRequesters.push(authorRequester);
        }
    );
    
    return(
        <div className={props.className}>
            <p>Tiene {friendRequesters.length} solicitudes de seguimiento: </p>
            <ul>
                {
                    friendRequesters.map(friend =>
                        <li key={friend.login.uuid}>
                            <FriendRequest details={friend} />
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

const FriendRequests = connect(
    state => ({
        user: state.login.user,
        authors: state.authors,
        userData: state.userData
    }) 
)(FriendRequestsView);

export default styled(FriendRequests)`
    & > ul {
        list-style: none;
        padding: 0;
        & > li {
            display: flex;
        }
    }
`;