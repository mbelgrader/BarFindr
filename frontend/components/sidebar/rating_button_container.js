import { connect } from 'react-redux';
import { updateRating } from '../../actions/bar_actions';
import { selectBar } from '../../reducers/selectors';

import RatingButton from './rating_button';

const mapDispatchToProps = dispatch => {
  return ({
    updateRating: rating => dispatch(updateRating(rating))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(RatingButton);
