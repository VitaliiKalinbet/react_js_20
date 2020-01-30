// With redux toolkit
import { createAction } from '@reduxjs/toolkit';
import * as types from './notesType';

export const addNoteAction = createAction(types.ADD_NOTE);
export const deleteNoteAction = createAction(types.DELETE_NOTE);

// Without redux toolkit
// import types from '../types';
// export const addNoteAction = data => ({
//   type: types.ADD_NOTE,
//   payload: {
//     note: data,
//   },
// });
// export const deleteNoteAction = id => {
//   return {
//     type: types.DELETE_NOTE,
//     payload: {
//       id,
//     },
//   };
// };
