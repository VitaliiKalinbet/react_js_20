import axios from 'axios';
import * as authActions from './authActions';
import * as API from '../../services/api';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = user => dispatch => {
  dispatch(authActions.registerStart());

  API.register(user)
    .then(res => {
      dispatch(authActions.registerSuccess(res.data));
      setToken(res.data.token);
    })
    .catch(err => dispatch(authActions.registerError(err)));
};

export const login = user => dispatch => {
  dispatch(authActions.loginStart());

  API.login(user)
    .then(res => {
      dispatch(authActions.loginSuccess(res.data));
      setToken(res.data.token);
    })
    .catch(err => dispatch(authActions.loginError(err)));
};

export const logout = () => dispatch => {
  dispatch(authActions.logoutStart());

  API.logout()
    .then(() => {
      dispatch(authActions.logoutSuccess());
      unsetToken();
    })
    .catch(err => dispatch(authActions.logoutError(err)));
};

export const refresh = () => (dispatch, getStore) => {
  const store = getStore();
  const { token } = store.auth;
  if (!token) {
    return;
  }
  setToken(token);
  dispatch(authActions.refreshStart());

  API.refresh()
    .then(() => {
      dispatch(authActions.refreshSuccess());
    })
    .catch(err => dispatch(authActions.refreshError(err)));
};
