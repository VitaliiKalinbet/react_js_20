import * as types from "./timerTypes";

export const incrementAction = value => ({
  type: types.INCREMENT_TIMER,
  payload: {
    value: value
  },
  meta: {
    throttle: 2000
  }
});

export const decrementAction = value => ({
  type: types.DECREMENT_TIMER,
  payload: {
    value: value
  },
  meta: {
    throttle: 3000
  }
});
