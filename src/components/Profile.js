import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import PostArticle from './PostArticle';
import Articles from './Articles';
import FriendRequests from './FriendRequests';
import fullName from '../utils/utils';

import { doFriendRequestDispatcher } from '../store/actions/userData';

const ProfileView = (props) => {
    const [author] = props.authors.data.filter(author =>
        author.login.uuid === props.match.params.uuidAuthor);
    if (!author) {
        return <Redirect to="/PageNotfound/" />
    } 
    const user = props.login.user;
    const isUser = author === user;
    const userData = props.userData;

    if (isUser) {
        return(
            <div className="AuthorProfile-wrapper">
                <h2>Perfil de <span className="full-name">{fullName(author)}</span></h2> 
                <img src={author.picture.large} />
                {
                    userData.friendRequestReceived.length > 0 &&
                    <FriendRequests />
                }
                <PostArticle />
                <Articles articles={userData.articles} />                    
            </div>
        );
    } else if (!isUser) {
        
        const [isFriend] = userData.friends.filter(friendId =>
            friendId === author.login.uuid
            );
        let authorData = JSON.parse(localStorage.getItem(author.login.uuid));
        if (!authorData) {
            authorData = {friends: [], friendRequestReceived: [], friendRequestSended: [], articles: []}
            localStorage.setItem(author.login.uuid, JSON.stringify(authorData));
          }
        const userId = user.login.uuid;
        const pendingRequest = authorData.friendRequestReceived.indexOf(userId) > -1
        return (
            <div className="AuthorProfile-wrapper">
                <h2>Perfil de <span className="full-name">{fullName(author)}</span></h2> 
                <img src={author.picture.large} />
                
                {
                    isFriend &&
                    <Articles articles={authorData.articles} />
                }
                {
                    !isFriend &&
                    <div>
                        <p>Actualmente no es amigo de {fullName(author)}</p>
                        {
                            !pendingRequest &&
                            <button onClick={() => props.doFriendRequest(author, user, authorData, userData)}>Solicitar amistad</button>
                        }   
                        {
                            pendingRequest &&
                            <p>Solicitud de amistad enviada, esperando respuesta</p>
                        }                     
                    </div>
                }
            </div>
        );
    }
}

const Profile = connect(
    state => ({
        login: state.login,
        authors: state.authors,
        userData: state.userData.data
    }),
    dispatch => ({
        doFriendRequest: (author, user, authorData, userData) => dispatch (doFriendRequestDispatcher(author, user, authorData, userData))
    })
)(ProfileView);
export default Profile;