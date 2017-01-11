import React from 'react';
import { Link } from 'react-router';

const links = () => (
  <div>
    <Link to="/signup">Sign Up</Link>
    &nbsp;&nbsp;
    <Link to="/login">Log In</Link>
  </div>
);

const signOut = (logout) => (
  <button onClick={logout}>Log Out</button>
);

const Greeting = ({ currentUser, logout }) => (
  <nav>
    <Link to="/"><h1>BarFindr</h1></Link>
    {currentUser ? signOut(logout) : links()}
  </nav>
);

export default Greeting;
