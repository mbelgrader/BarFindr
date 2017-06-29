import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import { resetFilter } from '../../actions/filterActions';
import Header from './Header';

const mapStateToProps = ({ session }, ownProps) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  resetFilter: () => dispatch(resetFilter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
