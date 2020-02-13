import types from './authTypes';

export const registerStart = () => ({
  type: types.REGISTRATION_START,
});
export const registerSuccess = data => ({
  type: types.REGISTRATION_SUCCESS,
  payload: {
    data,
  },
});
export const registerError = error => ({
  type: types.REGISTRATION_ERROR,
  payload: {
    error,
  },
});
