import { RECEIVE_BAR, RECEIVE_BAR_DETAILS, RECEIVE_COMMENT } from '../actions/bar_actions';
import merge from 'lodash/merge';

const barDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  // debugger
  switch (action.type) {
    case RECEIVE_BAR:
      const newBar = {[action.bar.id]: action.bar};
      return merge({}, state, newBar);
    case RECEIVE_COMMENT:
      const comment = action.comment;
      newState[comment.bar_id].comments.push(comment);
      return newState;
    default:
      return state;
  }
};

export default barDetailsReducer;
