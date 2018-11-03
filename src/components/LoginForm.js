import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

// Action Creators
const LOGGED = 'LOGGED';
const doLog = (user) => ({
  type: LOGGED,
  payload: user
});

const GET_AUTHORS_STARTED = 'GET_AUTHORS_STARTED';
const GET_AUTHORS_COMPLETED = 'GET_AUTHORS_COMPLETED';
const GET_AUTHORS_ERROR = 'GET_AUTHORS_ERROR';
const getAuthors = () => dispatch => {
  dispatch({type: GET_AUTHORS_STARTED})

  fetch('https://randomuser.me/api?results=10&seed=abc')
        .then(response => {
          if (!response.ok) {
            throw Error (response.statusText);
          }
          return response.json()
        })
        .then(({results}) => {
          dispatch({type: GET_AUTHORS_COMPLETED, payload: results})
        })
        .catch((error) => dispatch({type: GET_AUTHORS_ERROR, payload: error}))
}


class LoginFormView extends Component {
    render () {
      return (
        <div className="login-form-wrapper">
          <label>Nombre de usuario:&nbsp;<input onChange={(event) => this.updateState(event, 'userInput')}/></label>
          <label>Password:&nbsp;<input onChange={(event) => this.updateState(event, 'passInput')}/></label>
          <button onClick={this.checkLogin}>Enviar</button>
          {
            this.props.login && 
            <Redirect to="/" />
          }
        </div>  
      );
    }
    state = {
      userInput:'r',
      passInput: ''
    }
    componentDidMount() {
      this.props.setAuthors();
    }
    updateState = (event, prop) => {
      const state = {};    
      state[prop] = event.target.value;
      this.setState(state);
    }
    checkLogin = () => {
      const [userLogged] = this.props.authors.authors.filter(
        author => author.login.username === this.state.userInput && author.login.password === this.state.passInput);
      this.props.logged(userLogged);
    }
  }
      
  const LoginForm = connect(
    state => state,
    dispatch => ({
        logged : (user) => dispatch(doLog(user)),
        setAuthors: () => dispatch(getAuthors())
    })
  )(LoginFormView);

  export default LoginForm;