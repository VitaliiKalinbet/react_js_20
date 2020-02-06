import { combineReducers } from "redux";
import * as types from "./timerTypes";

const timerReducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT_TIMER:
      return state + action.payload.value;

    case types.DECREMENT_TIMER:
      return state - action.payload.value;

    default:
      return state;
  }
};

export default combineReducers({
  value: timerReducer
});
