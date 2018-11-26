import React from 'react';
import styled from 'styled-components';

import portada from '../assets/portada.jpg';

const MainLogout = (props) =>
    <div className={props.className}>
        <img src={portada} alt="App cover"/>
    </div>

/* 
En la v3 de styled-components bastaba con exportar la funcion que devolvia "styled",
ahora en la v4 se lanza un warning porque "styled" devuelve un objeto en lugar de una funcion y
cuando se pasa por el atributo "component" a "Route" (en app.js) se queja de esto.
Soluciono devolviendo funcion (en JSX) que recibe parametros (funcion que interpola React mediante JSX..?)
*/

const MainLogoutStyled = styled(MainLogout)`
    display: flex;
    justify-content: center;
     & img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: cover;
    }
`

export default props => <MainLogoutStyled {...props} />