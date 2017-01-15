import { values } from 'lodash';

export const selectBar = ({ barDetails }, id) => {
   return barDetails[id] || {};
};

export const selectAllBars = bars => values(bars);

export const selectComments = (bar) => {
  // let newArr = [];
  // let comments = bar.comments.map((obj) => {
  //     let userObj = obj.user;
  //     // debugger
  //     return [obj.comment, userObj.user];
  // }
  // return comments
};
