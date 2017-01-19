import { connect } from 'react-redux';
import { fetchRating } from '../../actions/bar_actions';
import { selectBar } from '../../reducers/selectors';

import RatingButton from './rating_button';

const mapStateToProps = (state) => {
  // debugger
  return {
    barId: selectBar(state)
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    // fetchRating: id => dispatch(fetchRating(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingButton);
