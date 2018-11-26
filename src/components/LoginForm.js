import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

import { doLog } from '../store/actions/login';
import { fetchAuthors } from '../store/actions/authors';

import ErrorLogin from './ErrorLogin';

class LoginFormView extends Component {
    render () {
      const isLoading = this.props.authors.loading;
      const errorLogin = this.state.errorLogin;
      return (
        <div className={this.props.className}>
          {
            errorLogin &&
            <ErrorLogin onAcept={() => {this.setState({errorLogin: false}); console.log(this.state)}}/>
          }          
          <label>
            <p>Nombre de usuario:</p>
            <input onChange={(event) => this.updateState(event, 'userInput')}/>
          </label>
          <label>
            <p>Password:</p>
            <input onChange={(event) => this.updateState(event, 'passInput')}/>
          </label>
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
      passInput: '',
      errorLogin: false
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
      } else {
        this.setState({errorLogin: true});
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

  /* 
En la v3 de styled-components bastaba con exportar la funcion que devolvia "styled",
ahora en la v4 se lanza un warning porque "styled" devuelve un objeto en lugar de una funcion y
cuando se pasa por el atributo "component" a "Route" (en app.js) se queja de esto.
Soluciono devolviendo funcion (en JSX) que recibe parametros (funcion que interpola React mediante JSX..?)
*/
  
  const LoginFormStyled = styled(LoginForm)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${({theme})=> theme.padding.gutter}
    & > label {
      margin-bottom: ${({theme}) => theme.padding.gutter};
      & > p {
        margin: 0;
      }
    }
  `;

  export default props => <LoginFormStyled {...props} />