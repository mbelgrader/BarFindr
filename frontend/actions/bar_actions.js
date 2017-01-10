import * as APIUtil from '../util/bar_api_util'

export const RECEIVE_BARS = "RECEIVE_BARS";

export const fetchBars = filters => dispatch => (
  APIUtil.fetchBars(filters)
    .then(bars => dispatch(receiveBars(bars)))
);

export const receiveBars = bars => ({
  type: RECEIVE_BARS,
  bars
});
