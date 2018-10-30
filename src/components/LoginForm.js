import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

// Action Creators
const LOGGED = 'LOGGED';
const doLog = (user) => ({
  type: LOGGED,
  payload: user
});


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
      passInput: '',
      authors: []
    }
    componentDidMount() {
      fetch('https://randomuser.me/api?results=10&seed=abc')
        .then(response => response.json())
        .then(({results}) => this.setState({
          authors: results
        }))
    }
    updateState = (event, prop) => {
      const state = {};    
      state[prop] = event.target.value;
      this.setState(state);
    }
    checkLogin = () => {
      const [userLogged] = this.state.authors.filter(
        author => author.login.username === this.state.userInput && author.login.password === this.state.passInput);
        this.props.logged(userLogged);
    }
  }
      
  const LoginForm = connect(
    state => state,
    dispatch => ({
        logged : (user) => dispatch(doLog(user))
    })
  )(LoginFormView);

  export default LoginForm;