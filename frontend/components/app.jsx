import React from 'react';
import SearchContainer from './search/SearchContainer';

const App = ({ children }) => (
  <div>
    <SearchContainer />
    { children }
  </div>
);

export default App;
