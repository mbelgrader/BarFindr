import { values } from 'lodash';

export const selectBar = ({ barDetails }, id) => {
   return barDetails[id] || {};
};

export const selectAllBars = bars => values(bars);

export const selectComments = (bar) => {
  let newArr = [];
  let comments = bar.comments;

    comments.forEach(obj => newArr.push(obj.comment));
  return newArr;
};
