import React from 'react';
import HeaderContainer from '../header/header_container';
import BarMap from '../map/bar_map';

const Search = ({ children, updateFilter, bars }) => (
  <div>
    <HeaderContainer
      updateFilter={updateFilter} />
    <BarMap
      bars={bars}
      updateFilter={updateFilter} />
    { children }
  </div>
);

export default Search;
