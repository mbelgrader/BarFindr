import React from 'react';
// import SearchContainer from './search/search_container';
import HeaderContainer from './header/header_container'

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    { children }
  </div>
);

export default App;
