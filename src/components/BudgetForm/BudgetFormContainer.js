import { connect } from "react-redux";
import BudgetForm from "./BudgetForm";
import * as budgetOperations from "../../redux/budgetApp/budgetOperations";

const mapDispatchToProps = dispatch => ({
  onSave: budget => dispatch(budgetOperations.setBudgetOperation(budget))
});

export default connect(null, mapDispatchToProps)(BudgetForm);
