import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './Header';

const mapStateToProps = ({ session }, ownProps) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
