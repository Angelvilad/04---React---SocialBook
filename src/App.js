import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

const App = () =>
  <Provider>
    <BrowserRouter>
      <div className="main-container" >
        <Header />
        {/*<Route path="/" component=>*/}
        <Route path="/login/" component={LoginForm} />
      </div> 
    </BrowserRouter>
  </Provider>
  
const Header = () =>
  <header>
    <div className="main-title">
      <h1><Link to="/">SocialBook</Link></h1>
    </div>    
    <div className="nav-menu">
      <nav>
        <ul>
          <li><Link to="/login/">Login</Link></li>
        </ul>
      </nav>
    </div>        
  </header>

class LoginForm extends Component {
  render () {
    return (
      <div className="login-form-wrapper">
        <label>Usuario:&nbsp;<input onChange={(event) => this.updateState(event, 'user')}/></label>
        <label>Password:&nbsp;<input onChange={(event) => this.updateState(event, 'password')}/></label>
        <button onClick={this.checkLogin}>Enviar</button>
        <p>{JSON.stringify(this.state)}</p>
      </div>  
    );
  }
  state = {
    user:'r',
    password: '',
    authors: []
  }
  updateState = (event, prop) => {

    const state = {};
    
    state[prop] = event.target.value;
    this.setState(state);
  }
  updatePass = event => {
    this.setState({password: event.target.value});
  }
}


export default App;

const authors = [
  {
    user: 'Pepe',
    password: 'pepito'
  },
  {
    user: 'Angel',
    password: 'angelito'
  }
]