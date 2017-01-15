import React from 'react';
import { Link } from 'react-router';
import SearchBarContainer from './search_bar_container';

const links = () => (
  <div>
    <Link className='nav-button' to="/demo">Demo</Link>
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Log In</Link>
  </div>
);

const signOut = (logout) => (
  <button className='nav-button' onClick={logout}>Log Out</button>
);

const Header = ({ currentUser, logout }) => (
  <nav>
    <Link to="/"><h1 className="logo">BarFindr</h1></Link>
    <SearchBarContainer />
    {currentUser ? signOut(logout) : links()}
  </nav>
);

export default Header;
