import React from 'react';
import {connect} from 'react-redux';

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

/*const Articles = connect(
    state => ({
        articles: state.userData.data.articles
    }),
)(ArticlesView);*/
export default Articles;