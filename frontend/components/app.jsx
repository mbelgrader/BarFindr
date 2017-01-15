import React from 'react';
import HeaderContainer from './header/header_container';
import SearchContainer from './search/search_container';
import Footer from './footer';

const App = ({ children }) => (
  <div>
    <SearchContainer />
    { children }
    <Footer />
  </div>
);

export default App;
