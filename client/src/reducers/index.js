import homeSelectReducer from './homeSelect';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  homeSelect: homeSelectReducer,
});

export default allReducers;
