import { connect } from "react-redux";
import ExpensesTable from "./ExpensesTable";
import * as budgetOperations from "../../redux/budgetApp/budgetOperations";
import * as budgetAppSelectors from "../../redux/budgetApp/budgetAppSelectors";

const mapStateToProps = store => ({
  expenses: budgetAppSelectors.getExpenses(store)
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(budgetOperations.deleteExpenseOperation(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
