import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import { getData } from './store/actions/userData';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import MainLogout from './components/MainLogout';
import Profile from './components/Profile';
import Restringed from './components/Restringed';
import PageNotFound from './components/PageNotFound';

class AppView extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="main-container" >
          <Header />        
          <Switch>
            <Route exact path="/" component={this.props.login.logged ? Main : MainLogout} />
            <Route exact path="/login/" component={LoginForm} />
            <Route path="/profile/:uuidAuthor" component={this.props.login.logged ? Profile : Restringed} />
            <Route component={PageNotFound} />
          </Switch>             
        </div> 
      </BrowserRouter>
    );    
  }
  componentDidUpdate() {
    /*user is logged and not retrieved data yet? Then retrieve user data */
    /* mirar si en lugar de cuando se actualice, se haga esto cuando el usuario haga log */

    const { user } = this.props.login;
    const userData = this.props.userData.data;
    if (user && !userData) {
      //localStorage.clear(); // Funcion para borrar el localStorage
      this.props.getUserData(user.login.uuid);
    }
  }
}

const App = connect(
  state => ({
    login: state.login,
    userData: state.userData
  }),
  dispatch => ({
      getUserData: (userid) => dispatch(getData(userid))
  })
)(AppView);
export default App;