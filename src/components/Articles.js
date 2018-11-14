import React from 'react';

import Article from './Article';

const Articles = (props) => {
    if (props.articles.length === 0) {
        return (
            <div className="articles-wrapper">
                <h2>Todavia no ha escrito ningun artículo.</h2>
            </div>
        );
    } else {
        return (
            <div className="articles-wrapper">
                <h2>Listado de articulos</h2>
                {
                    props.articles.map(article =>
                    <li key={article.date} ><Article details={article}/></li>
                    )
                }  
            </div>
        );
    }    
}

export default Articles;