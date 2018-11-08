import React from 'react';
import {connect} from 'react-redux';

import fullName from '../utils/utils';

const ProfileView = (props) => {
    const user = props.location.state.author === props.login.user; //mirar de cambiar sistema de recibir el author para el perfil..asi da error cuando navegamos adelante y atras..¿obtener parametro de la url?
    const author = props.location.state.author;
    return (
        <div className="AuthorProfile-wrapper">
            <h2>Perfil de <span className="full-name">{fullName(author)}</span></h2> 
            <img src={author.picture.large} />
            {
                user &&
                <div>
                    <p>Solicitudes de seguimiento:</p>
                    <p>Escribir un articulo</p>
                </div>

            }
            {
                !user && /* ejemplo, si no soy yo y no somos amigos: props.userData.data.friends.filter(friend => friend === props.location.state.author ) */
                <p>PERFIL DE AUTHOR QUE NO ES EL USUARIO</p>
            }
        </div>
    );
}


const Profile = connect(
    state => ({
        login: state.login,
    }),
)(ProfileView);
export default Profile;