import React, { Component } from 'react';
import {connect} from 'react-redux';

/*const ARTICLE_POSTED = 'ARTICLE_POSTED';
const postArticle = (article, userId) => dispatch => {
    localStorage.setItem() //hacer el itemstorage en el reducer??
}*/

class PostArticleView extends Component {
    render () {
        return (
            <div className="postarticle-wrapper">
                <p><label>Publicar articulo:&nbsp;</label></p>
                <textarea onChange={(event) => this.updateState(event)}></textarea>
                {<button onClick={this.postArticle}>Enviar</button>}
            </div>
        );
    }
    state = {
        articleInput: '',
        articleDate: {}
    }
    updateState = (event) => {
        const state = {};
        state.articleInput = event.target.value;
        this.setState(state);
    }
    postArticle = () => {
        const now = new Date();
        const article = {
            data: this.state.articleInput,
            date: now.toLocaleString()
        };
        const userId = this.props.userId;
        const dataUser = JSON.parse(localStorage.getItem(userId));
        dataUser.articles.unshift(article);
        localStorage.setItem(userId, JSON.stringify(dataUser));
        this.props.articlePosted(dataUser);
    }
}

const PostArticle = connect(
    state => ({userId: state.login.user.login.uuid}),
    dispatch => ({
        articlePosted: (dataUser) => dispatch({type: 'DATA_USER_UPDATED', payload: dataUser})
    })
)(PostArticleView);

export default PostArticle;