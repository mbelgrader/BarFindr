import { combineReducers } from 'redux';
import SessionReducer from './sessionReducer';
import barsReducer from './barsReducer';
import filterReducer from './filterReducer';
import barDetailsReducer from './barDetailsReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bars: barsReducer,
  barDetails: barDetailsReducer,
  filters: filterReducer
});

export default RootReducer;
