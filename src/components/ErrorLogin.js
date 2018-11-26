import React from 'react';
import styled from 'styled-components';

const ErrorLogin = (props) =>
    <div className={props.className}>
        <p>Nombre de usuario y/o Password incorrecto, pruebe de nuevo</p>
        <div>
            <button onClick={props.onAcept}>Ok</button>
        </div>        
    </div>

export default styled(ErrorLogin)`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background-color: red;
    padding: ${({theme}) => theme.padding.gutter};
    & > div > button {
        background-color:red;
    }
`;