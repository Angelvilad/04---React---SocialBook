import React from 'react';
import {connect} from 'react-redux';


const acceptDispatcher = (decision, friendId, userId) => dispatch => {
    if (decision ==='yes') {
        const newUserData = JSON.parse(localStorage.getItem(userId));
        const newAuthorData = JSON.parse(localStorage.getItem(friendId));        
        newUserData.friends.unshift(friendId);
        newAuthorData.friends.unshift(userId);
        let index = newUserData.friendRequest.indexOf(friendId);
        if (index > -1) {
            newUserData.friendRequest.splice(index, 1);
        }
        index = newAuthorData.friendRequest.indexOf(userId);
        if (index > -1) {
            newUserData.friendRequest.splice(index, 1);
        }
        localStorage.setItem(userId, JSON.stringify(newUserData));
        localStorage.setItem(friendId, JSON.stringify(newAuthorData));
        dispatch({ type: 'USERDATA_UPDATED', payload: newUserData});
    } else if (decision === 'no') {
        const newUserData = JSON.parse(localStorage.getItem(userId));
        const index = newUserData.friendRequest.indexOf(friendId);
        newUserData.friendRequest.splice(index, 1);
        localStorage.setItem(userId, JSON.stringify(newUserData));
        dispatch({ type: 'USERDATA_UPDATED', payload: newUserData});
    }
}
const FriendRequestView = (props) =>
    <div className="friend-request-wrapper">
        <img src={props.details.picture.thumbnail} />
        <button onClick={() => props.accept('yes', props.details.login.uuid, props.userId )}>Aceptar</button>
        <button onClick={() => props.accept('no', props.details.login.uuid, props.userId )}>Denegar</button>
    </div>

const FriendRequest = connect(
    state => ({
        userId: state.login.user.login.uuid
    }),
    dispatch => ({
        accept: (decision, friendId, userId) => dispatch(acceptDispatcher(decision, friendId, userId))
    })
)(FriendRequestView);
export default FriendRequest;