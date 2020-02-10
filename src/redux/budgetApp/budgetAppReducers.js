import { combineReducers } from "redux";
import * as types from "../budgetApp/budgetAppTypes";

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_BUDGET_SUCCESS:
    case types.GET_BUDGET_SUCCESS:
      return action.payload.budget;

    case types.SET_BUDGET_ERROR:
    case types.GET_BUDGET_ERROR:
      return state;

    default:
      return state;
  }
};

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE_SUCCESS:
      return [payload.expense, ...state];

    case types.ADD_EXPENSE_ERROR:
      return state;

    default:
      return state;
  }
};

const isLoadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.SET_BUDGET_START:
    case types.GET_BUDGET_START:
    case types.ADD_EXPENSE_START:
      return true;

    case types.SET_BUDGET_SUCCESS:
    case types.SET_BUDGET_ERROR:
    case types.GET_BUDGET_SUCCESS:
    case types.GET_BUDGET_ERROR:
    case types.ADD_EXPENSE_SUCCESS:
    case types.ADD_EXPENSE_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.SET_BUDGET_START:
    case types.GET_BUDGET_START:
    case types.ADD_EXPENSE_START:
      return null;

    case types.SET_BUDGET_ERROR:
    case types.GET_BUDGET_ERROR:
    case types.ADD_EXPENSE_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});
