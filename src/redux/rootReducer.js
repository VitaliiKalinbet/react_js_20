import { combineReducers } from 'redux';
import timerReducers from './timer/timerReducers';
import notesReducers from './notes/notesReducers';

const rootReducer = combineReducers({
  timer: timerReducers,
  notes: notesReducers,
});

export default rootReducer;
