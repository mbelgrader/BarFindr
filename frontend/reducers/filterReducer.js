import {
  UPDATE_FILTER,
  RECEIVE_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTER
 } from '../actions/filterActions';
import merge from 'lodash/merge';

const _defaultFilter = Object.freeze({
  bounds: {},
  tags: []
});

const filterReducer = (state = _defaultFilter, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
  case UPDATE_FILTER:
    const newFilter = { [action.filter]: action.value };
    return merge({}, state, newFilter);
  case RECEIVE_FILTER:
    newState.tags.push(action.tag);
    return newState;
  case REMOVE_FILTER:
    let index = newState.tags.indexOf(action.tag);
    newState.tags.splice(index, 1);
    return newState;
  case CLEAR_FILTER:
    newState.tags = [];
    return newState;
  default:
    return state;
}
};

export default filterReducer;
