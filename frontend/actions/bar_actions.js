import * as APIUtil from '../util/bar_api_util';

export const RECEIVE_BARS = "RECEIVE_BARS";
export const RECEIVE_BAR = "RECEIVE_BAR";
export const RECEIVE_BAR_DETAILS = "RECEIVE_BAR_DETAILS";

export const fetchBars = filters => dispatch => (
  APIUtil.fetchBars(filters)
    .then(bars => dispatch(receiveBars(bars)))
);

export const fetchBar = id => dispatch => (
  APIUtil.fetchBar(id)
    .then(bar => dispatch(receiveBar(bar)))
);

export const receiveBars = bars => ({
  type: RECEIVE_BARS,
  bars
});

export const receiveBar = bar => ({
  type: RECEIVE_BAR,
  bar
});
