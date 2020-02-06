import { createSelector } from "reselect";
export const getExpenses = store => store.budgetApp.expenses;

export const getBudget = store => store.budgetApp.budget;

export const getSearchValue = store => store.budgetApp.search;

// export const getFilteredExpenses = store => {
//   const expenses = getExpenses(store);
//   const searchValue = getSearchValue(store);
//   return expenses.filter(el => el.name.includes(searchValue));
// };
export const getFilteredExpenses = createSelector(
  [getExpenses, getSearchValue],
  (expenses, searchValue) =>
    expenses.filter(el => el.name.includes(searchValue))
);

export const getTotalExpenses = store =>
  store.budgetApp.expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

export const getBalance = store => {
  const budget = getBudget(store);
  const expenses = getTotalExpenses(store);
  return budget - expenses;
};
