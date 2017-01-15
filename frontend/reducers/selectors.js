import { values } from 'lodash';

export const selectBar = ({ barDetails }, id) => {
   return barDetails[id] || {};
};

export const selectAllBars = bars => values(bars);
