import homeSelectReducer from './homeSelect';
import gameReducer from './game';
import testReducer from './test';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  homeSelect: homeSelectReducer,
  game: gameReducer,
  test: testReducer,
});

export default allReducers;
