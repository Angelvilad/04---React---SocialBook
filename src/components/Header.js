import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import { doLogOut } from '../store/actions/login';

const HeaderView = (props) =>
  <header className={props.className}>
    <div className="main-title">
      <h1 className="complete-logo"><Link to="/">SocialBook</Link></h1>
      <h1 className="abbr-logo"><Link to="/">SB</Link></h1>
    </div>    
    <div className="nav-menu">
      <nav>
        <ul>
          {!props.login.logged && 
            <li><Link to="/login/">Login</Link></li>
          }
          {props.login.logged && 
            <React.Fragment>
              <li><Link to={`/profile/${props.login.user.login.uuid}`}>My Profile</Link></li>
              <li><Link to="/" onClick={props.logOut}>Logout</Link></li>
            </React.Fragment>            
          }
        </ul>
      </nav>
    </div>        
  </header>

  const Header = connect(
    state => ({
      login: state.login
    }),
    dispatch => ({
      logOut: () => dispatch(doLogOut())
    })
  )(HeaderView);

  export default styled(Header)`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.colors.main};
    min-height: 89px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${({theme}) => theme.padding.gutter};
    flex: 1;
    & .main-title {
      & > .complete-logo {
        display: none
      }
    }    
    & a {
      text-decoration: none;
      color: white;
    }
    & ul {
      display: flex;
      list-style: none;
    }
    & li {
      padding: 0 ${({theme}) => theme.padding.gutter};
    }
    @media only screen and (min-width: 600px) {
      & > .main-title {
        & > .complete-logo {
          display: block;
        }
        & > .abbr-logo {
          display: none;
        }
      }
  }
  `;