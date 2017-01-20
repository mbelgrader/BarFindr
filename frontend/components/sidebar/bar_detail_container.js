import { connect } from 'react-redux';

import { fetchBar, deleteComment } from '../../actions/bar_actions';
import { selectBar, selectComments } from '../../reducers/selectors';

import BarDetail from './bar_detail';

const mapStateToProps = (state, {params, ownProps }) => {
  const barId = parseInt(params.barId);
  const bar = selectBar(state, barId);
  const currentUser = state.session.currentUser;
  let userRating = 0;
  if (bar && bar.user_rating)
    userRating = bar.user_rating;
  return {
    barId,
    currentUser,
    bar,
    ownProps,
    userRating
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBar: id => dispatch(fetchBar(id)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarDetail);
