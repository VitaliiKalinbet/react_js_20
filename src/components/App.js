import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import BudgetForm from "./BudgetForm/BudgetFormContainer";
import ExpenseForm from "./ExpensesForm/ExpensesFormContainer";
import ExpensesTable from "./ExpensesTable/ExpensesTableContainer";
import Values from "./Values";
import Timer from "./Timer/Timer";
import * as budgetAppSelectors from "../redux/budgetApp/budgetAppSelectors";
import SearchBar from "./SearchBar/SearchBar";

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expenses }) => {
  return (
    <>
      <SearchBar />
      <Container>
        <BudgetForm />
        <Values />
        <ExpenseForm />
        {expenses.length > 0 && <ExpensesTable />}
      </Container>
      <br />
      <Timer />
    </>
  );
};

const mapStateToProps = store => ({
  expenses: budgetAppSelectors.getExpenses(store)
});

export default connect(mapStateToProps, null)(App);
