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
        <label>Nombre de usuario:&nbsp;<input onChange={(event) => this.updateState(event, 'userInput')}/></label>
        <label>Password:&nbsp;<input onChange={(event) => this.updateState(event, 'passInput')}/></label>
        <button onClick={this.checkLogin}>Enviar</button>
        <p>{JSON.stringify(this.state)}</p>
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
      console.log('El usuario loggeado es:', JSON.stringify(userLogged));
  }
}


export default App;