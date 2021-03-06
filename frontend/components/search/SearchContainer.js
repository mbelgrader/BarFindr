import { connect } from 'react-redux';
import { selectAllBars } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filterActions';
import Search from './Search';

const mapStateToProps = ({ bars }) => ({
  bars: selectAllBars(bars)
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
