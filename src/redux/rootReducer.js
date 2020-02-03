import { combineReducers } from "redux";
import budgetAppReducer from "./budgetApp/budgetAppReducers";

const rootReducer = combineReducers({
  budgetApp: budgetAppReducer
});

export default rootReducer;
