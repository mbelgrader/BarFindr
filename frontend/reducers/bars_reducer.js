import { RECEIVE_BARS } from '../actions/bar_actions';

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
