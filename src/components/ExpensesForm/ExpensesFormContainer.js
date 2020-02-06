import { connect } from "react-redux";
import * as budgetActions from "../../redux/budgetApp/budgetActions";
import ExpenseForm from "./ExpenseForm";

const mapDispatchToProps = dispatch => ({
  onSave: data => dispatch(budgetActions.addExpenseAction(data))
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
