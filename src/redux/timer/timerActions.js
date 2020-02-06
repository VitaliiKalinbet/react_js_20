import * as types from "./timerTypes";

export const incrementAction = value => ({
  type: types.INCREMENT_TIMER,
  payload: {
    value: value
  }
});

export const decrementAction = value => ({
  type: types.DECREMENT_TIMER,
  payload: {
    value: value
  }
});
