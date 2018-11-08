import React from 'react';
import {connect} from 'react-redux';

import fullName from '../utils/utils';

const ProfileView = (props) => {
    const [author] = props.authors.data.filter(author =>
        author.login.uuid === props.match.params.uuidAuthor);
    const isUser = author === props.login.user;
    // Hacer comprobacion por si author es undefined (seria que no coincide ninguno de la lista de authors con el param de la url (por ejemplo si se pone a mano)) y si es undefined mandar a pagenotfound
    return (
        <div className="AuthorProfile-wrapper">
            <h2>Perfil de <span className="full-name">{fullName(author)}</span></h2> 
            <img src={author.picture.large} />
            {
                isUser &&
                <div>
                    <p>Solicitudes de seguimiento:</p>
                    <p>Escribir un articulo</p>
                </div>

            }
            {
                !isUser && // ejemplo, si no soy yo y no somos amigos: props.userData.data.friends.filter(friend => friend === props.location.state.author )
                <p>PERFIL DE AUTHOR QUE NO ES EL USUARIO</p>
            }
        </div>
    );
}


const Profile = connect(
    state => ({
        login: state.login,
        authors: state.authors
    }),
)(ProfileView);
export default Profile;