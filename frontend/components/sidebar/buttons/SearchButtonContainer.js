import { connect } from 'react-redux';
import { updateFilter } from '../../../actions/filter_actions';
import SearchButton from './SearchButton';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchButton);
