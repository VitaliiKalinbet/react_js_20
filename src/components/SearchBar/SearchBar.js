import React from "react";
import { connect } from "react-redux";
import * as budgetActions from "../../redux/budgetApp/budgetActions";
import * as budgetAppSelectors from "../../redux/budgetApp/budgetAppSelectors";

const SearchBar = ({ value, onChangeSearchValue }) => {
  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={e => onChangeSearchValue(e.target.value)}
      />
    </form>
  );
};

const mapStateToProps = store => ({
  value: budgetAppSelectors.getSearchValue(store)
});

const mapDispatchToProps = dispatch => ({
  onChangeSearchValue: value =>
    dispatch(budgetActions.searchExpenseAction(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
