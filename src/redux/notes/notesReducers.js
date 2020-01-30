// With redux toolkit
import { createReducer } from '@reduxjs/toolkit';
import * as types from './notesType';

const initial = {
  items: [],
};

const notesReducer = createReducer(initial, {
  [types.ADD_NOTE]: (state, action) => ({
    ...state,
    items: [...state.items, action.payload.note],
  }),
  [types.DELETE_NOTE]: (state, action) => ({
    ...state,
    items: state.items.filter(el => el.id !== action.payload.id),
  }),
});

export default notesReducer;

// Without redux toolkit
// import types from '../types';
// const initial = {
//   items: [],
// };
// const notesReducer = (state = initial, { type, payload }) => {
//   switch (type) {
//     case types.ADD_NOTE:
//       return {
//         ...state,
//         items: [...state.items, payload.note],
//       };

//     case types.DELETE_NOTE:
//       return {
//         ...state,
//         items: state.items.filter(el => el.id !== payload.id),
//       };

//     default:
//       return state;
//   }
// };
// export default notesReducer;
