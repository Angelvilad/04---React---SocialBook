import React from 'react';
import {connect} from 'react-redux';

import { acceptFriendDispatcher } from '../store/actions/userData'; 

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
        accept: (decision, requesterId, userId) => dispatch(acceptFriendDispatcher(decision, requesterId, userId))
    })
)(FriendRequestView);
export default FriendRequest;