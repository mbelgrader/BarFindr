import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import barsReducer from './bars_reducer';
import filterReducer from './filter_reducer';
import barDetailsReducer from './bar_details_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bars: barsReducer,
  barDetails: barDetailsReducer,
  filter: filterReducer
});

export default RootReducer;
