import { RECEIVE_BARS, RECEIVE_BAR } from '../actions/bar_actions';
import merge from 'lodash/merge';

const barsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BARS:
      return action.bars;
    default:
      return state;
  }
};

export default barsReducer;