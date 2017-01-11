import React from 'react';

export const BarDetail = ({ bar }) = (
  <div>
    <ul>
      <li>{bar.name}</li>
      <li>{bar.address}</li>
    </ul>
  </div>
);
