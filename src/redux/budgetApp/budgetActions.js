import * as types from "../budgetApp/budgetAppTypes";

// set budget actions
export const setBudgetStart = () => ({
  type: types.SET_BUDGET_START
});
export const setBudgetSuccess = budget => ({
  type: types.SET_BUDGET_SUCCESS,
  payload: {
    budget: budget
  }
});
export const setBudgetError = error => ({
  type: types.SET_BUDGET_ERROR,
  payload: {
    error: error
  }
});
// get budget actions
export const getBudgetStart = () => ({
  type: types.GET_BUDGET_START
});
export const getBudgetSuccess = budget => ({
  type: types.GET_BUDGET_SUCCESS,
  payload: {
    budget: budget
  }
});
export const getBudgetError = error => ({
  type: types.GET_BUDGET_ERROR,
  payload: {
    error: error
  }
});

// add expense actions
export const addExpenseStart = () => ({
  type: types.ADD_EXPENSE_START
});
export const addExpenseSuccess = data => ({
  type: types.ADD_EXPENSE_SUCCESS,
  payload: {
    expense: data
  }
});
export const addExpenseError = error => ({
  type: types.ADD_EXPENSE_ERROR,
  payload: {
    error: error
  }
});

// get expenses actions
export const getExpensesStart = () => ({
  type: types.GET_EXPENSE_START
});
export const getExpensesSuccess = arr => ({
  type: types.GET_EXPENSE_SUCCESS,
  payload: {
    expenses: arr
  }
});
export const getExpensesError = error => ({
  type: types.GET_EXPENSE_ERROR,
  payload: {
    error: error
  }
});

// delete expense actions
export const deleteExpenseStart = () => ({
  type: types.DELETE_EXPENSE_START
});
export const deleteExpenseSuccess = id => ({
  type: types.DELETE_EXPENSE_SUCCESS,
  payload: {
    id: id
  }
});
export const deleteExpenseError = error => ({
  type: types.DELETE_EXPENSE_ERROR,
  payload: {
    error: error
  }
});
