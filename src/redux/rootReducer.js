import { combineReducers } from "redux";
import budgetAppReducer from "./budgetApp/budgetAppReducers";
import timerReducer from "./timer/timerReducer";

const rootReducer = combineReducers({
  budgetApp: budgetAppReducer,
  timer: timerReducer
});

export default rootReducer;
