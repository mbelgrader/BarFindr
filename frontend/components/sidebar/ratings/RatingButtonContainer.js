import { connect } from 'react-redux';
import { updateRating } from '../../../actions/BarActions';
import { selectBar } from '../../../reducers/selectors';

import RatingButton from './RatingButton';

const mapDispatchToProps = dispatch => ({
  updateRating: rating => dispatch(updateRating(rating))
});

export default connect(
  null,
  mapDispatchToProps
)(RatingButton);
