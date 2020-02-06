import { connect } from "react-redux";
import ExpensesTable from "./ExpensesTable";
import * as budgetActions from "../../redux/budgetApp/budgetActions";
import * as budgetAppSelectors from "../../redux/budgetApp/budgetAppSelectors";

const mapStateToProps = store => ({
  expenses: budgetAppSelectors.getFilteredExpenses(store)
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(budgetActions.removeExpenseAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
