import * as budgetActions from "./budgetActions";
import * as API from "../../services/api";

export const setBudgetOperation = budget => dispatch => {
  dispatch(budgetActions.setBudgetStart());

  API.setBudget(budget)
    .then(res => {
      dispatch(budgetActions.setBudgetSuccess(budget));
    })
    .catch(err => dispatch(budgetActions.setBudgetError(err)));
};

export const getBudgetOperation = () => dispatch => {
  dispatch(budgetActions.getBudgetStart());

  API.getBudget()
    .then(res => {
      dispatch(budgetActions.getBudgetSuccess(res.data.budget));
    })
    .catch(err => dispatch(budgetActions.getBudgetError(err)));
};

export const addExpenseOperation = expense => dispatch => {
  dispatch(budgetActions.addExpenseStart());

  API.addExpense(expense)
    .then(res => {
      console.log(res.data);
      dispatch(budgetActions.addExpenseSuccess(res.data));
    })
    .catch(err => dispatch(budgetActions.addExpenseError(err)));
};
