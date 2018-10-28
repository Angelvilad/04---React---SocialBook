import React from 'react';
import {Link} from 'react-router-dom';

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

  export default Header;