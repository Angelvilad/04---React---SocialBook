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
import Profile from './components/Profile';
import Restringed from './components/Restringed';

// OK -guardar lo usuarios en local estorage cuandoel fetch del login??
// OK -usar thunk para action creator asincrona que haga fetch y dispatche la accion entonces (antes de cargar, cargado y error?)
// Hacer pagina Not Found
// Desabilitar boton enviar mientras estamos requiriendo los usuarios en el login
// OK -Cuando muestre lista autores no muestre usuario logeado (en el map lo puedo controlar)
// sacar perfil de usuario clickado. No deberia dejarme ver si no estoy logeado. ...comprobar en cada pagina si esta logeado??)
// voy por: mirar de volver a cambiar AuthorProfile a Profile y utilizar este componente tanto para authores como para el usuario...¿pasar estado en el link / route?
// cambiar en redux propiedad login del status por user por ejemplo

const App = (props) =>
    <BrowserRouter>
      <div className="main-container" >
        <Header />        
              <Switch>
                <Route exact path="/" component={props.login.logged ? Main : MainLogout} />
                <Route path="/login/" component={LoginForm} />
                <Route path="/profile/:uuidAuthor" component={props.login.logged ? Profile : Restringed} />
              </Switch>             
      </div> 
    </BrowserRouter>

export default App;