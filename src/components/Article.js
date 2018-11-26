import React from 'react';
import styled from 'styled-components';

const Article = (props) =>
    <div className={props.className}>
        <div className="date-wrapper">
            <p>Publicado: <time dateTime={props.details.date}>{props.details.date}</time></p>
        </div>
        <div className="text-wrapper">
            <p>{props.details.data}</p>
        </div>
    </div>

export default styled(Article)`
    box-shadow: ${({theme}) => theme.colors.boxShadow};
    padding: 15px;
    margin-bottom: ${({theme}) => theme.padding.gutter};
    & > .date-wrapper {
        color: #afa9a9;
    }
`;