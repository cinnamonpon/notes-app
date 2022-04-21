import { handleActions } from 'redux-actions';
import { CREATE_NOTE_SUCCESS, GET_NOTES_SUCCESS } from './NoteActionType';

const initialState = {
  notes: [],
  from: 0,
  to: 10,
  isLastPage: false,
};

const noteReducer = handleActions({
  [GET_NOTES_SUCCESS](state, { payload }) {
    const { data } = payload;
    return data.from === 0 ? {
      ...payload.data,
    } : {
      ...state,
      ...data,
      notes: [
        ...state.notes,
        ...data.notes,
      ],
      isLastPage: data.notes.length === 0,
    };
  },
  [CREATE_NOTE_SUCCESS](state, { payload }) {
    return {
      ...state,
      notes: [
        payload.data,
        ...state.notes,
      ],
    };
  },
}, initialState);

export default noteReducer;
