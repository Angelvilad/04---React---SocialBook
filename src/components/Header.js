import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// Action Creators
const LOGOUT = 'LOGOUT';
const doLogOut = () => ({
  type: LOGOUT
});

const HeaderView = (props) =>
  <header>
    <div className="main-title">
      <h1><Link to="/">SocialBook</Link></h1>
    </div>    
    <div className="nav-menu">
      <nav>
        <ul>
          {!props.login && 
            <li><Link to="/login/">Login</Link></li>
          }
          {props.login && 
            <li><Link to="/" onClick={props.logOut}>Logout</Link></li>
          }
        </ul>
      </nav>
    </div>        
  </header>

  const Header = connect(
    state => state,
    dispatch => ({
      logOut: () => dispatch(doLogOut())
    })
  )(HeaderView);

  export default Header;