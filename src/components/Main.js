import React from 'react';
import styled from 'styled-components';

import Authors from './Authors';

const Main = (props) =>
    <div className={props.className}>
        <h2>Lista de usuarios de SocialBook</h2>
        <Authors />
    </div>

/* 
En la v3 de styled-components bastaba con exportar la funcion que devolvia "styled",
ahora en la v4 se lanza un warning porque "styled" devuelve un objeto en lugar de una funcion y
cuando se pasa por el atributo "component" a "Route" (en app.js) se queja de esto.
Soluciono devolviendo funcion (en JSX) que recibe parametros (funcion que interpola React mediante JSX..?)
*/

const MainStyled = styled(Main)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default props => <MainStyled {...props} />