import React from 'react';

const Article = (props) =>
    <div className="article-wrapper">
        <div>
            <p>Publicado: <time dateTime={props.details.date}>{props.details.date}</time></p>
        </div>
        <div>
            <p>{props.details.data}</p>
        </div>
    </div>

export default Article;