import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onIncrement, onDecrement, buttonDecrementDisable }) => (
  <>
    <button
      onClick={buttonDecrementDisable && onDecrement}
      // onClick={buttonDecrementDisable ? onDecrement : null}
      type="button"
    >
      -
    </button>
    <button onClick={onIncrement} type="button">
      +
    </button>
  </>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  buttonDecrementDisable: PropTypes.bool.isRequired,
};

export default Controls;
