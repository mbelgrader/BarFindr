import { connect } from 'react-redux';
import { addFilter, deleteFilter } from '../../../actions/filterActions';
import SearchButton from './SearchButton';

const mapStateToProps = (state) => {
  // console.log(state);
  return ({ });
};

const mapDispatchToProps = dispatch => ({
  addFilter: (filter, value) => dispatch(addFilter(filter, value)),
  deleteFilter: (filter, value) => dispatch(deleteFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchButton);
