import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import PostArticle from './PostArticle';
import Articles from './Articles';
import FriendRequests from './FriendRequests';
import fullName from '../utils/utils';

import { doFriendRequestDispatcher } from '../store/actions/userData';

const ProfileView = (props) => {
    const [author] = props.authors.data.filter(author =>
        author.login.uuid === props.match.params.uuidAuthor);
    const user = props.login.user;
    const isUser = author === user;
    const userData = props.userData;

    if (isUser) {
        return(
            <div className={props.className}>
                <h2>Perfil de <span className="full-name">{fullName(author)}</span></h2> 
                <div className="main-wrapper">                
                    <div className="profile-wrapper">
                        <div className="img-wrapper">
                            <img src={author.picture.large} alt="Avatar"/>
                        </div>
                        {
                            userData.friendRequestReceived.length > 0 &&
                            <div className="requests-wrapper">
                                <FriendRequests />
                            </div>        
                        }
                        <div className="data-wrapper">
                            <p>Nombre: <span className="full-name">{fullName(author)}</span></p>
                            <p>Lugar de residencia: <span className="city-state">{author.location.city}, {author.location.state}</span></p>
                            <p>Edad: {author.dob.age}</p>
                            <p>Email: {author.email}</p>
                        </div>                        
                    </div>
                    <div className="wall-wrapper" >                        
                        <PostArticle />
                        <Articles articles={userData.articles} />   
                    </div>                                     
                </div>
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
            <div className={props.className}>
                <h2>Perfil de <span className="full-name">{fullName(author)}</span></h2>
                <div className="main-wrapper">
                    <div className="profile-wrapper">
                        <div className="img-wrapper">
                            <img alt="Avatar" src={author.picture.large} />
                        </div>
                        <div className="data-wrapper">
                            <p>Nombre: <span className="full-name">{fullName(author)}</span></p>
                            <p>Lugar de residencia: <span className="city-state">{author.location.city}, {author.location.state}</span></p>
                            <p>Edad: {author.dob.age}</p>
                            <p>Email: {author.email}</p>
                        </div>
                    </div>
                    <div className="wall-wrapper" >
                        {
                            isFriend &&
                            <Articles articles={authorData.articles} />
                        }
                        {
                            !isFriend &&
                            <div className="no-friend-wrapper">
                                <p>Actualmente no es amigo de <span className="full-name">{fullName(author)}</span></p>
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
                </div>
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

/* 
En la v3 de styled-components bastaba con exportar la funcion que devolvia "styled",
ahora en la v4 se lanza un warning porque "styled" devuelve un objeto en lugar de una funcion y
cuando se pasa por el atributo "component" a "Route" (en app.js) se queja de esto.
Soluciono devolviendo funcion (en JSX) que recibe parametros (funcion que interpola React mediante JSX..?)
*/

const ProfileStyled = styled(Profile)`       
    & > h2 {
        text-align: center;
    }
    & > .main-wrapper {
        display: flex;
        background-color: ${({theme}) => theme.colors.secondary}; 
        flex-direction: column;
        & > .profile-wrapper {
            flex-direction: column;
            align-content: flex-start;
            padding: ${({theme}) => theme.padding.gutter};
            display: flex;
            & > .img-wrapper {
                order: 1;
                margin-right: ${({theme}) => theme.padding.gutter};
                & > img {
                    box-shadow: ${({theme}) => theme.colors.boxShadow};
                    width: 100%;
                }
            }
            & > .requests-wrapper {
                order: 3;
            }
            & > .data-wrapper {
                order: 2;
            }
        }
        & > .wall-wrapper {
            padding: ${({theme}) => theme.padding.gutter};
            flex-direction: column;
            display: flex;
            & > .no-friend-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                &  p {
                    text-align: center;
                }
            }
        }
        @media only screen and (min-width: 600px) {
            flex-direction: row;
        }
        @media only screen and (min-width: 900px) {
            & > .profile-wrapper {
                flex-direction: row;
                flex-wrap: wrap
                flex: 2;
                & > .img-wrapper {
                    width: 40%;
                }
                & > .data-wrapper {
                    width: 40%;
                }
            }
            & > .wall-wrapper {
                flex: 2;
            }
        }
        @media only screen and (min-width: 1200px) {
            & > .profile-wrapper {
                flex: 1;
                & > .img-wrapper {
                    max-width: 20vh;
                    & > img {
                        width: 100%;
                    }
                }
            }
            & > .wall-wrapper {
                flex: 3;
            }
        }
    }
    & .full-name {
        text-transform: capitalize;
    }
    & .city-state {
        text-transform: capitalize;
    }
`;

export default props => <ProfileStyled {...props} />