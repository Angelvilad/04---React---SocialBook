import React from 'react';
import {connect} from 'react-redux';

const FriendRequestView = (props) =>
    <div className="friend-request-wrapper">
        <p>Tiene {props.friendRequest.length} solicitudes de seguimiento.</p>
    </div>

const FriendRequest = connect(
    state => ({
        friendRequest: state.userData.data.friendRequest
    }) 
)(FriendRequestView);

export default FriendRequest;