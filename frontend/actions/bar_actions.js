import * as APIUtil from '../util/bar_api_util';

export const RECEIVE_BARS = "RECEIVE_BARS";
export const RECEIVE_BAR = "RECEIVE_BAR";
export const RECEIVE_BAR_DETAILS = "RECEIVE_BAR_DETAILS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const fetchBars = filters => dispatch => (
  APIUtil.fetchBars(filters)
    .then(bars => dispatch(receiveBars(bars)))
);

export const fetchBar = id => dispatch => (
  APIUtil.fetchBar(id)
    .then(bar => dispatch(receiveBar(bar)))
);

export const createComment = comment => dispatch => {
  debugger
  return (
    APIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
  );
}

export const receiveBars = bars => ({
  type: RECEIVE_BARS,
  bars
});

export const receiveBar = bar => ({
  type: RECEIVE_BAR,
  bar
});

export const receiveComment = comment => {
  debugger
  return({
    type: RECEIVE_COMMENT,
    comment
  });
}
