import { combineReducers } from 'redux';
import noteReducer from './note/NoteReducer';

const appReducer = combineReducers({
  note: noteReducer,
});

const rootReducer = (state, action) => {
  const newState = state;
  return appReducer(newState, action);
};

export default rootReducer;
