import React from 'react';
import HeaderContainer from '../header/HeaderContainer';
import BarMap from '../map/BarMap';

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
