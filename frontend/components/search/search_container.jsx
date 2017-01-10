import { connect } from 'react-redux';
import { selectAllBars } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

import Search from './search';

const mapStateToProps = ({ bars }) => ({
  bars: selectAllBars(bars)
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter) => dispatch(updateFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
