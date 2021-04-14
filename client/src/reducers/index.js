import homeSelectReducer from './homeSelect';
import gameReducer from './game';
import testReducer from './test';
import characterReducer from './character';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  homeSelect: homeSelectReducer,
  game: gameReducer,
  test: testReducer,
  character: characterReducer,
});

export default allReducers;
