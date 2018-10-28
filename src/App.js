import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

// crear store y asignarla en provider. Conectar al estado los componentes (por ejem Header)
// voy por metodo de checklogin. Estado global redux de prueba creado
const initialState = {
  logged: false
}
const rootReducer = (state, action) => {
  switch(action.type) {
    case 'LOGGED':
      return {logged: true};
    default:
     return state;
  }
};

const store = createStore(
  rootReducer,
  initialState
);

const App = () =>
  <Provider store={store}>
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
  checkLogin = () => {
    const userLogged = authors.filter(author => author.user === this.state.user && author.password === this.state.password);
    console.log('El usuario loggeado es:', JSON.stringify(userLogged));
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