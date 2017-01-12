import React from 'react';
import { Link } from 'react-router';
import SearchBar from './search_bar';

const links = () => (
  <div>
    <Link className='demo-button' to="/demo">Demo</Link>
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Log In</Link>
  </div>
);

const signOut = (logout) => (
  <button onClick={logout}>Log Out</button>
);

const Header = ({ currentUser, logout }) => (
  <nav>
    <Link to="/"><h1 className="logo">BarFindr</h1></Link>
    <SearchBar />
    {currentUser ? signOut(logout) : links()}
  </nav>
);

export default Header;
