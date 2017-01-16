import { RECEIVE_BARS, RECEIVE_BAR, RECEIVE_COMMENT } from '../actions/bar_actions';
import merge from 'lodash/merge';

const barsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_BARS:
      return action.bars;
    case RECEIVE_COMMENT:
      const comment = action.comment;
      newState[comment.bar_id].comments.push(comment);
      return newState;
    default:
      return state;
  }
};

export default barsReducer;
