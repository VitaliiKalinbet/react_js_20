// With redux toolkit
import { createReducer } from '@reduxjs/toolkit';
import * as types from './timerTypes';

const initialValue = {
  value: 0,
};

const timerReducer = createReducer(initialValue, {
  [types.INCREMENT_VALUE]: (state, action) => ({
    ...state,
    value: state.value + action.payload.value,
  }),
  [types.DECREMENT_VALUE]: (state, action) => ({
    ...state,
    value: state.value - action.payload.value,
  }),
});

export default timerReducer;

// Without redux toolkit
// import types from '../types';
// const initialValue = {
//   value: 0,
// };
// const timerReducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case types.INCREMENT_VALUE:
//       return {
//         ...state,
//         value: state.value + action.payload.value,
//       };

//     case types.DECREMENT_VALUE:
//       return {
//         ...state,
//         value: state.value - action.payload.value,
//       };

//     default:
//       return state;
//   }
// };
// export default timerReducer;
