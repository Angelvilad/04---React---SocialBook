import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import PostArticle from './PostArticle';
import Articles from './Articles';
import FriendRequests from './FriendRequests';
import fullName from '../utils/utils';

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
                    userData.friendRequest.length > 0 &&
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
            authorData = {friends: [], friendRequest: [], articles: []}
            localStorage.setItem(author.login.uuid, JSON.stringify(authorData));
          }
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
                        <button onClick={() => props.doFriendRequest(author, user)}>Solicitar amistad</button>
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
        userData: state.userData.data,
        doFriendRequest: (author, user) => {
            const userId = user.login.uuid;
            const authorId = author.login.uuid;
            const authorData = JSON.parse(localStorage.getItem(authorId));        
            authorData.friendRequest.unshift(userId);
            localStorage.setItem(authorId, JSON.stringify(authorData));
        }
    })
)(ProfileView);
export default Profile;