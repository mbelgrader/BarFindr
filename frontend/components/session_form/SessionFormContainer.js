import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/sessionActions';
import SessionForm from './SessionForm';


const mapStateToProps = ({ session }, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  location: ownProps.location
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signup') ? signup : login;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
