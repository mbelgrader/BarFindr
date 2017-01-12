import { fetchBars } from './bar_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter) => (dispatch, getState) => {
  dispatch(changeFilter(filter));
  return fetchBars(getState().filter)(dispatch);
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
