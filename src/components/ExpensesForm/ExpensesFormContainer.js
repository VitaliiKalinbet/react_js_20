import { connect } from "react-redux";
import * as budgetOperations from "../../redux/budgetApp/budgetOperations";
import ExpenseForm from "./ExpenseForm";

const mapDispatchToProps = dispatch => ({
  onSave: data => dispatch(budgetOperations.addExpenseOperation(data))
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
