import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

// Action Creators
const LOGGED = 'LOGGED';
const doLog = (user) => ({
  type: LOGGED,
  payload: user
});

const FETCH_AUTHORS_STARTED = 'FETCH_AUTHORS_STARTED';
const FETCH_AUTHORS_COMPLETED = 'FETCH_AUTHORS_COMPLETED';
const FETCH_AUTHORS_ERROR = 'FETCH_AUTHORS_ERROR';
const fetchAuthors = () => dispatch => {
  dispatch({type: FETCH_AUTHORS_STARTED})

  fetch('https://randomuser.me/api?results=10&seed=abc')
        .then(response => {
          if (!response.ok) {
            throw Error (response.statusText);
          }
          return response.json()
        })
        .then(({results}) => {
          dispatch({type: FETCH_AUTHORS_COMPLETED, payload: results})
        })
        .catch((error) => dispatch({type: FETCH_AUTHORS_ERROR, payload: error}))
}

class LoginFormView extends Component {
    render () {
      const isLoading = this.props.authors.loading;
      return (
        <div className="login-form-wrapper">
          <label>Nombre de usuario:&nbsp;<input onChange={(event) => this.updateState(event, 'userInput')}/></label>
          <label>Password:&nbsp;<input onChange={(event) => this.updateState(event, 'passInput')}/></label>
          {
            !isLoading &&
            <button onClick={this.checkLogin} >Enviar</button>
          }
          {
            isLoading &&
              <p>LOADING, PLEASE WAIT</p>
          }
          {
            this.props.login.logged &&
              <Redirect to="/" />
          }
        </div>  
      );
    }
    state = {
      userInput:'',
      passInput: ''
    }
    componentDidMount() {
      this.props.getAuthors();
    }
    updateState = (event, prop) => {
      const state = {};    
      state[prop] = event.target.value;
      this.setState(state);
    }
    checkLogin = () => {
      const [userMatched] = this.props.authors.data.filter(
        author => author.login.username === this.state.userInput && author.login.password === this.state.passInput);
      if (userMatched)  {
        this.props.log(userMatched);
      }
    }
}
      
const LoginForm = connect(
    state => ({
      login: state.login,
      authors: state.authors
    }),
    dispatch => ({
        log : (user) => dispatch(doLog(user)),
        getAuthors: () => dispatch(fetchAuthors()),
    })
  )(LoginFormView);

  export default LoginForm;