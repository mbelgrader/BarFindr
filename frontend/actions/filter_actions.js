import { fetchBars } from './bar_actions';
import { merge } from 'lodash';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  const newFilters = merge({}, getState().filters, {[filter]: value});
  return fetchBars(newFilters)(dispatch);
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
