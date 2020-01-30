// With redux toolkit
import { createAction } from '@reduxjs/toolkit';
import * as types from './timerTypes';

export const incrementAction = createAction(types.INCREMENT_VALUE);
export const decrementAction = createAction(types.DECREMENT_VALUE);

// Withour redux toolkit
// import types from '../types';
// export const incrementAction = incrementValue => {
//   return {
//     type: types.INCREMENT_VALUE,
//     payload: {
//       value: incrementValue,
//     },
//   };
// };
// export const decrementAction = decrementValue => ({
//   type: types.DECREMENT_VALUE,
//   payload: {
//     value: decrementValue,
//   },
// });
