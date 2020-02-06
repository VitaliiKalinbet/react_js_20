import { connect } from "react-redux";
import BudgetForm from "./BudgetForm";
import * as budgetActions from "../../redux/budgetApp/budgetActions";

const mapDispatchToProps = dispatch => ({
  onSave: budget => dispatch(budgetActions.setBudgetAction(budget))
});

export default connect(null, mapDispatchToProps)(BudgetForm);
