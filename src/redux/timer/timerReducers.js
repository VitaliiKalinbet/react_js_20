import types from '../types';

const initialValue = {
  value: 0,
};

const timerReducer = (state = initialValue, action) => {
  switch (action.type) {
    case types.INCREMENT_VALUE:
      return {
        ...state,
        value: state.value + action.payload.value,
      };

    case types.DECREMENT_VALUE:
      return {
        ...state,
        value: state.value - action.payload.value,
      };

    default:
      return state;
  }
};

export default timerReducer;
