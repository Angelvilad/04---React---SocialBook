import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import MainLogout from './components/MainLogout';

const App = (props) =>
    <BrowserRouter>
      <div className="main-container" >
        <Header />
        <Switch>
          <Route exact path="/" component={props.login ? Main : MainLogout} />
          <Route path="/login/" component={LoginForm} />
        </Switch>
      </div> 
    </BrowserRouter>

export default App;