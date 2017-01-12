import { connect } from 'react-redux';

import { fetchBar } from '../../actions/bar_actions';
import { selectBar } from '../../reducers/selectors';

import BarDetail from './bar_detail';

const mapStateToProps = (state, { params, ownProps }) => {
  const barId = parseInt(params.barId);
  const bar = selectBar(state, barId);
  return {
    barId,
    bar,
    ownProps
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBar: id => dispatch(fetchBar(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarDetail);
