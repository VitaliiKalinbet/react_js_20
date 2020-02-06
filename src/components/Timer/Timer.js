import React from "react";
import { connect } from "react-redux";
import * as timerActions from "../../redux/timer/timerActions";
import getTimerValue from "../../redux/timer/timerSelectors";
import css from "./Timer.module.css";

const Timer = ({ value, onIncrement, onDecrement }) => (
  <div className={css.container}>
    <button type="button" className={css.button} onClick={() => onDecrement(5)}>
      &#8722;
    </button>
    <div className={css.value}>
      {value}
      minutes
    </div>
    <button
      type="button"
      className={css.button}
      onClick={() => onIncrement(10)}
    >
      &#43;
    </button>
  </div>
);

const mapStateToProps = store => ({
  value: getTimerValue(store)
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(timerActions.incrementAction(value)),
  onDecrement: value => dispatch(timerActions.decrementAction(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
