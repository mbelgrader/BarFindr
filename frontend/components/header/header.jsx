import React from 'react';
import { Link } from 'react-router';

const links = () => (
  <nav>
    <Link to="/signup">Sign Up</Link>
    &nbsp;&nbsp;
    <Link to="/login">Log In</Link>
  </nav>
);

const signOut = (logout) => (
  <button onClick={logout}>Log Out</button>
);

const Greeting = ({ currentUser, logout }) => (
  <nav>
    <h1>BarFindr</h1>
    {currentUser ? signOut(logout) : links()}
  </nav>
);

export default Greeting;
