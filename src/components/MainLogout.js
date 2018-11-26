import React from 'react';
import styled from 'styled-components';

import portada from '../assets/portada.jpg';

const MainLogout = (props) =>
    <div className={props.className}>
        <img src={portada} alt="App cover"/>
    </div>

export default styled(MainLogout)`
    display: flex;
    justify-content: center;
     & img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: cover;
    }
`