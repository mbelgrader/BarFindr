import * as APIUtil from '../util/bar_api_util';

export const RECEIVE_BARS = "RECEIVE_BARS";
export const RECEIVE_BAR = "RECEIVE_BAR";
export const RECEIVE_BAR_DETAILS = "RECEIVE_BAR_DETAILS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_RATING = "RECEIVE_RATING";

export const fetchBars = filters => dispatch => (
  APIUtil.fetchBars(filters)
    .then(bars => dispatch(receiveBars(bars)))
);

export const receiveBars = bars => ({
  type: RECEIVE_BARS,
  bars
});


export const fetchBar = id => dispatch => (
  APIUtil.fetchBar(id)
    .then(bar => dispatch(receiveBar(bar)))
);

export const receiveBar = bar => ({
  type: RECEIVE_BAR,
  bar
});

export const createComment = comment => dispatch => {
  return (
    APIUtil.createComment(comment)
    .then(review => dispatch(receiveComment(review)))
  );
};

export const receiveComment = comment => {
  debugger
  return({
    type: RECEIVE_COMMENT,
    comment
  });
};

export const deleteComment = id => dispatch => {
  // debugger
  return (
    APIUtil.deleteComment(id)
    .then(comment => dispatch(removeComment(comment)))
  );
};

export const removeComment = id => {
  return ({
    type: REMOVE_COMMENT,
    id
  });
};

// export const fetchRating = id => dispatch => (
//   APIUtil.fetchRating(id)
//     .then(bar => dispatch(receiveRating(bar)))
// );
//
// export const receiveRating = id => ({
//   type: RECEIVE_RATING,
//   id
// });
