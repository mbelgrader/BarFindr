import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import { updateFilter } from '../../actions/filterActions';
import Header from './Header';

const mapStateToProps = ({ session }, ownProps) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
