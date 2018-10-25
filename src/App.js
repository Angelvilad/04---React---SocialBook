import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container" >
          <Header />
          {/*<Route path="/" component=>*/}
          <Route path="/login/" component={LoginForm} />
        </div> 
      </BrowserRouter>
     
    );
  }
}

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
        <label>Usuario:&nbsp;<input value={this.state.user} onChange={this.updateUser}/></label>
        <label>Password:&nbsp;<input/></label>
        <button>Enviar</button>
      </div>  
    );
  }
  state = {
    user: '',
    password: ''
  }
  updateUser = event => {
    return this.setState({user: event.target.value})
  }
}


export default App;

const users = {
  user: 'Pepe',
  password: 'pepito'
  }
