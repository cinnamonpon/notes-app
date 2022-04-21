/* *
 * Action Declaration
 * Suggested Standard:
 *
 *    actionName - redux action type
 *
 * Example:
 * createAction(actionName)
 * will yield { type: actionName, payload: params passed to the action }
 *
 * For api requests:
 * createAction(actionName, () => ({
 *  request: {
 *    url, // api url
 *    method, // get, post, put, patch, delete etc
 *    data, // for post requests,
 *    params, // for get requests,
 *    ...rest // parameters that axios accepts
 *  },
 * }))
 * */

import { createAction } from 'redux-actions';
import {
  CREATE_NOTE, GET_NOTES,
} from './NoteActionType';

const getNotes = createAction(
  GET_NOTES,
  (data) => ({
    request: {
      url: '/notes',
      method: 'post',
      data,
    },
  }),
);

const createNote = createAction(
  CREATE_NOTE,
  (data) => ({
    request: {
      url: '/create',
      method: 'post',
      data,
    },
  }),
);

export {
  getNotes,
  createNote,
};
