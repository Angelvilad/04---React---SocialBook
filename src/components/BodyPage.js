import React from 'react';
import {connect} from 'react-redux';

const BodyPageView = (props) =>
    <div className="body-page-wrapper">
        {
            props.login
                ?<p>Estoy Loggeado!!</p> //Aqui va el cuerpo de la pagina estando logeado
                :<p>Sin Loggear. Haga Login por favor</p> //Aqui va el cuerpo de la pagina sin estar loggeado (p.e. sugerencia para logearse)
        }
    </div>

const BodyPage = connect(
    state => state
)(BodyPageView);

export default BodyPage