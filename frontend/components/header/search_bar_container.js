import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import SearchBar from './search_bar';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter) => dispatch(updateFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
