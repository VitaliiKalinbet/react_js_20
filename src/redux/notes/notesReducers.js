import types from '../types';

const initial = {
  items: [],
};

const notesReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.ADD_NOTE:
      return {
        ...state,
        items: [...state.items, payload.note],
      };

    default:
      return state;
  }
};

export default notesReducer;
