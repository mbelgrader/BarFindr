import { fetchBars } from './BarActions';
import { merge } from 'lodash';

export const UPDATE_FILTER = "UPDATE_FILTER";
export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchBars(getState().filters)(dispatch);
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const addFilter = (filter, tag) => (dispatch, getState) => {
  dispatch(receiveFilter(tag));
  return fetchBars(getState().filters)(dispatch);
};

export const receiveFilter = (tag) => ({
  type: RECEIVE_FILTER,
  tag
});

export const deleteFilter = (filter, tag) => (dispatch, getState) => {
  dispatch(removeFilter(tag));
  return fetchBars(getState().filters)(dispatch);
};

export const removeFilter = (tag) => ({
  type: REMOVE_FILTER,
  tag
});

export const resetFilter = () => (dispatch, getState) => {
  dispatch(clearFilter());
  return fetchBars(getState().filters)(dispatch);
};

export const clearFilter = (tag) => ({
  type: CLEAR_FILTER,
  tag
});
