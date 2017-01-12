import { RECEIVE_BAR, RECEIVE_BAR_DETAILS } from '../actions/bar_actions';
import merge from 'lodash/merge';

const barDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_BAR:
      const newBar = {[action.bar.id]: action.bar};
      return merge({}, state, newBar);
    default:
      return state;
  }
};

export default barDetailsReducer;
