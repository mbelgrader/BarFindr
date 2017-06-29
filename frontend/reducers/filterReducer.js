import { UPDATE_FILTER } from '../actions/filterActions';
import merge from 'lodash/merge';

const _defaultFilter = Object.freeze({
  bounds: {},
  tag: ''
});

const filterReducer = (state = _defaultFilter, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default filterReducer;