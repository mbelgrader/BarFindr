import { RECEIVE_BAR,
         RECEIVE_BAR_DETAILS,
         RECEIVE_COMMENT,
         REMOVE_COMMENT,
         RECEIVE_RATING} from '../actions/bar_actions';
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
    case REMOVE_COMMENT:
      newState[comment.bar_id].comments.splice(action.id, 1);
      return newState;
    // case RECEIVE_RATING:

    default:
      return state;
  }
};

export default barDetailsReducer;
