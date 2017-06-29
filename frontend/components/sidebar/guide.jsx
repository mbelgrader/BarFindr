import React from 'react';
import SearchButtonContainer from './buttons/SearchButtonContainer';

export const Guide = () => (
  <div className='sidebar'>
    <ul className='guide'>
      <li className='click-info'>
        Click a map icon to see more info
      </li>
    <br />
      <li>
      <ul className='tag-list'>
          <li><SearchButtonContainer tag='Club' /></li>
          <li><SearchButtonContainer tag='Lounge' /></li>
          <li><SearchButtonContainer tag='Dive' /></li>
          <li><SearchButtonContainer tag='Sports' /></li>
          <li><SearchButtonContainer tag='Pool' /></li>
          <li><SearchButtonContainer tag='Hookah' /></li>
          <li><SearchButtonContainer tag='Food' /></li>
          <li><SearchButtonContainer tag='Live Music' /></li>
          <li><SearchButtonContainer tag='Hipster' /></li>
        </ul>
      </li>
    </ul>
  </div>
);
