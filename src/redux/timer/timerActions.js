import types from '../types';

export const incrementAction = incrementValue => {
  return {
    type: types.INCREMENT_VALUE,
    payload: {
      value: incrementValue,
    },
  };
};

export const decrementAction = decrementValue => ({
  type: types.DECREMENT_VALUE,
  payload: {
    value: decrementValue,
  },
});
