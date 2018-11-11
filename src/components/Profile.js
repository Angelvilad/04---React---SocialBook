import React from 'react';
import {connect} from 'react-redux';

import PostArticle from './PostArticle';
import Articles from './Articles';
import fullName from '../utils/utils';

const ProfileView = (props) => {
    const [author] = props.authors.data.filter(author =>
        author.login.uuid === props.match.params.uuidAuthor);
    /*if (!author) {
        return <Redirect to="/notfound/" />
    }* si ninguno de la lista de autores coincide con la ruta */
    const isUser = author === props.login.user;
    if (isUser) {
        const {friendRequest, friends, articles} = props.userData;
        console.log('userData', props.userData);
        return(
            <div className="AuthorProfile-wrapper">
                <h2>Perfil de <span className="full-name">{fullName(author)}</span></h2> 
                <img src={author.picture.large} />
                    <p>Solicitudes de seguimiento: {friendRequest.length}</p>
                    <PostArticle />
                    <Articles />                    
            </div>
        );
    }
    // Hacer comprobacion por si author es undefined (seria que no coincide ninguno de la lista de authors con el param de la url (por ejemplo si se pone a mano)) y si es undefined mandar a pagenotfound
    /*return (
        <div className="AuthorProfile-wrapper">
            <h2>Perfil de <span className="full-name">{fullName(author)}</span></h2> 
            <img src={author.picture.large} />
            {
                isUser &&
                <div>
                    <p>Solicitudes de seguimiento: {props.userData.friendRequest.length}</p>
                    {
                        /*<PostArticle></PostArticle>
                        <PostedArticles></PostedArticles>
                    }
                </div>

            }
            {
                !isUser && // ejemplo, si no soy yo y no somos amigos: props.userData.data.friends.filter(friend => friend === props.location.state.author )
                <p>PERFIL DE AUTHOR QUE NO ES EL USUARIO</p>
            }
        </div>
    );*/
}


const Profile = connect(
    state => ({
        login: state.login,
        authors: state.authors,
        userData: state.userData.data
    }),
)(ProfileView);
export default Profile;