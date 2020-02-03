import * as types from "../budgetApp/budgetAppTypes";

export const setBudgetAction = value => ({
  type: types.SET_BUDGET,
  payload: {
    budget: value
  }
});

export const addExpenseAction = data => ({
  type: types.ADD_EXPENSE,
  payload: {
    expense: data
  }
});

export const removeExpenseAction = value => ({
  type: types.REMOVE_EXPENSE,
  payload: {
    id: value
  }
});
