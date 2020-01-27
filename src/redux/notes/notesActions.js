import types from '../types';

export const addNoteAction = data => ({
  type: types.ADD_NOTE,
  payload: {
    note: data,
  },
});

export const w = () => {};
