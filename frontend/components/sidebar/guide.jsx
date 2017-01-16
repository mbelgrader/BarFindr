import React from 'react';

export const Guide = () => (
  <div className='sidebar'>
    <ul className='guide'>
      <li className='click-info'>
        <i className="fa fa-mouse-pointer" aria-hidden="true"></i>
        Click an icon to see more info
      </li>
    <br />
      <li>
        <i className="fa fa-search" aria-hidden="true"></i>
        Search for different vibes &nbsp; : <br />
      <ul className='tag-list'>
          <li>lounge</li>
          <li>club</li>
          <li>dive</li>
          <li>hipster</li>
          <li>hookah</li>
          <li>food</li>
          <li>etc</li>
        </ul>
      </li>
    </ul>
  </div>
);
