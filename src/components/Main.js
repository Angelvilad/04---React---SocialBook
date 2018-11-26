import React from 'react';
import styled from 'styled-components';

import Authors from './Authors';

const Main = (props) =>
    <div className={props.className}>
        <h2>Lista de usuarios de SocialBook</h2>
        <Authors />
    </div>

export default styled(Main)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;