import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

import store from './store';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

// crear store y asignarla en provider. Conectar al estado los componentes (por ejem Header)
// voy por metodo de checklogin. Estado global redux de prueba creado

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

export default App;