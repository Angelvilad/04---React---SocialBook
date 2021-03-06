import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

class PostArticleView extends Component {
    render () {
        return (
            <div className={this.props.className}>
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
        articlePosted: (dataUser) => dispatch({type: 'USERDATA_UPDATED', payload: dataUser})
    })
)(PostArticleView);

export default styled(PostArticle)`
    & > textarea {
        resize: none
        box-sizing: border-box;
        width: 100%;
        height: 15rem;
    }
`;