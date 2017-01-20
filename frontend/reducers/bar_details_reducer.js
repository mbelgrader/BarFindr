import { RECEIVE_BAR,
         RECEIVE_BAR_DETAILS,
         RECEIVE_COMMENT,
         REMOVE_COMMENT,
         RECEIVE_RATING} from '../actions/bar_actions';
import merge from 'lodash/merge';

const barDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_BAR:
      const newBar = {[action.bar.id]: action.bar};
      debugger
      if (newBar[action.bar.id].user_rating.length > 0)
        newBar[action.bar.id].user_rating = newBar[action.bar.id].user_rating[0].rating;
      return merge({}, state, newBar);
    case RECEIVE_COMMENT:
      const comment = action.comment;
      newState[comment.bar_id].comments.push(comment);
      return newState;
    case REMOVE_COMMENT:
      let commentId;
      newState[action.comment.bar_id].comments.forEach((com, i) => {
        if (com.id === action.comment.id)
          commentId = i;
      });
      newState[action.comment.bar_id].comments.splice(commentId, 1);
      return newState;
    case RECEIVE_RATING:
      const barId = action.rating.bar_id;
      console.log(action);
      newState[barId].user_rating = action.rating.rating;
      return newState;
    default:
      return state;
  }
};

export default barDetailsReducer;
