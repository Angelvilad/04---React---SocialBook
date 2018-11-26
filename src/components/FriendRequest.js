import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import { acceptFriendDispatcher } from '../store/actions/userData'; 

const FriendRequestView = (props) =>
    <div className={props.className}>
        <div className="img-wrapper" >
            <img src={props.details.picture.thumbnail} alt="Friend requester avatar"/>
        </div>
        <div className="buttons-wrapper">
            <button onClick={() => props.accept('yes', props.details.login.uuid, props.userId )}>Aceptar</button>
            <button onClick={() => props.accept('no', props.details.login.uuid, props.userId )}>Denegar</button>
        </div>       
    </div>

const FriendRequest = connect(
    state => ({
        userId: state.login.user.login.uuid
    }),
    dispatch => ({
        accept: (decision, requesterId, userId) => dispatch(acceptFriendDispatcher(decision, requesterId, userId))
    })
)(FriendRequestView);

export default styled(FriendRequest)`
    display: flex;
    flex-direction: column;
    align-items: center;
    & .buttons-wrapper {
        & button {
            margin: 5px;
        }
    }
`;