export const getExpenses = store => store.budgetApp.expenses;

export const getBudget = store => store.budgetApp.budget;

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
