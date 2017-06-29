import { connect } from 'react-redux';
import { createComment, fetchBar } from '../../../actions/BarActions.js';

import CommentForm from './CommentForm';

const mapStateToProps = ({ session }) => ({
  currentUserId: session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchBar: (id) => dispatch(fetchBar(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
