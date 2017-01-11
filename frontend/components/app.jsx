import React from 'react';
// import SearchContainer from './search/search_container';
import HeaderContainer from './header/header_container';
import BarMapContainer from './map/bar_map_container';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <BarMapContainer />
    { children }
  </div>
);

export default App;
