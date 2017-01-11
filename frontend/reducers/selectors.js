import { values } from 'lodash';

export const selectBar = ({ bars }, id) => {
   return bars[id] || {};
};

export const selectAllBars = bars => values(bars);
