import { fetchBars } from './bar_actions';
import { merge } from 'lodash';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchBars(getState().filters)(dispatch);
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
