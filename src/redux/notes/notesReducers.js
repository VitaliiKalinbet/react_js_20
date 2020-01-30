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

    case types.DELETE_NOTE:
      return {
        ...state,
        items: state.items.filter(el => el.id !== payload.id),
      };

    default:
      return state;
  }
};

export default notesReducer;
