import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import BudgetForm from "./BudgetForm/BudgetFormContainer";
import ExpenseForm from "./ExpensesForm/ExpensesFormContainer";
import ExpensesTable from "./ExpensesTable/ExpensesTableContainer";
import Values from "./Values";
import Timer from "./Timer/Timer";
import * as budgetAppSelectors from "../redux/budgetApp/budgetAppSelectors";
import * as budgetOperations from "../redux/budgetApp/budgetOperations";

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

class App extends Component {
  componentDidMount() {
    this.props.getBudgetOperation();
    this.props.getExpensesOperation();
  }

  render() {
    const { expenses } = this.props;
    return (
      <>
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
  }
}

const mapStateToProps = store => ({
  expenses: budgetAppSelectors.getExpenses(store)
});

const mapDispatchToProps = dispatch => ({
  getBudgetOperation: () => dispatch(budgetOperations.getBudgetOperation()),
  getExpensesOperation: () => dispatch(budgetOperations.getExpensesOperation())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
