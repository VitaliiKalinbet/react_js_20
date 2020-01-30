import types from '../types';

export const addNoteAction = data => ({
  type: types.ADD_NOTE,
  payload: {
    note: data,
  },
});

export const deleteNoteAction = id => {
  return {
    type: types.DELETE_NOTE,
    payload: {
      id,
    },
  };
};
