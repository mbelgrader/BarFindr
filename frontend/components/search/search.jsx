import React from 'react';
import BarMap from '../map/bar_map';

const Search = ({ bars, updateFilter }) => (
  <div>
    <p>Search</p>
    <BarMap bars={bars} updateFilter={updateFilter}/>
  </div>
);

export default Search;
