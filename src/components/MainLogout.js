import React from 'react';
import styled from 'styled-components';

import portada from '../assets/portada.jpg';

const MainLogout = (props) =>
    <div className={props.className}>
        <img src={portada} />
    </div>

const MainLogoutStyled = styled(MainLogout)`
    img {
        width: 100%;
    }
`

export default MainLogoutStyled;