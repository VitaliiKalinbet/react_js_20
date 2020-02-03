import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as budgetAppSelectors from "../redux/budgetApp/budgetAppSelectors";
import Value from "./Value";

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

// const calculateBalance = (budget, expenses) => budget - expenses;

// const calculateTotalExpenses = expenses => {
//   return expenses.reduce((total, expense) => total + expense.amount, 0);
// };

const Values = ({ budget, expenses, balance }) => {
  return (
    <Container>
      <Value label="Budget" value={budget} isPositive />
      <Value label="Expenses" value={expenses} />
      <Value label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

const mapStateToProps = store => ({
  budget: budgetAppSelectors.getBudget(store),
  expenses: budgetAppSelectors.getTotalExpenses(store),
  balance: budgetAppSelectors.getBalance(store)
});

export default connect(mapStateToProps, null)(Values);
