import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

import store from './store';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import BodyPage from './components/BodyPage';

const App = () =>
  <Provider store={store}>
    <BrowserRouter>
      <div className="main-container" >
        <Header />
        <Switch>
          <Route exact path="/" component={BodyPage} />
          <Route path="/login/" component={LoginForm} />
        </Switch>
      </div> 
    </BrowserRouter>
  </Provider>

export default App;