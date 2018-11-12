import React from 'react';
import {connect} from 'react-redux';

import FriendRequest from './FriendRequest';

const FriendRequestsView = (props) => {
    const authors = props.authors.data;
    const userId = props.user.login.uuid
    const dataUser = JSON.parse(localStorage.getItem(userId));
    const friendRequest = dataUser.friendRequest
    const friendRequesters = []
    
    friendRequest.forEach((friendId) => {
        const [author] = authors.filter( author => author.login.uuid === friendId);
        friendRequesters.unshift(author);
        }
    );

    console.log(friendRequesters);
    
    return(
        <div className="friend-requests-wrapper">
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
        authors: state.authors
    }) 
)(FriendRequestsView);

export default FriendRequests;