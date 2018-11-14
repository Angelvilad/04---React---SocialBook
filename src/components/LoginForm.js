import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import { doLog } from '../store/actions/login';
import { fetchAuthors } from '../store/actions/authors';

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