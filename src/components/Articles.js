import React from 'react';
import styled from 'styled-components';

import Article from './Article';

const Articles = (props) => {
    if (props.articles.length === 0) {
        return (
            <div className={props.className}>
                <h2>Todavia no ha escrito ningun artículo.</h2>
            </div>
        );
    } else {
        return (
            <div className={props.className}>
                <h2>Listado de articulos</h2>
                <ul>
                    {
                        props.articles.map(article =>
                        <li key={article.date} ><Article details={article}/></li>
                        )
                    }  
                </ul>                
            </div>
        );
    }    
}

export default styled(Articles)`
    & > h2 {
        text-align: center;
    }
    & > ul {
        list-style: none;
    }
`;