import homeSelectReducer from './homeSelect';
import gameReducer from './game';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  homeSelect: homeSelectReducer,
  game: gameReducer,
});

export default allReducers;
