import axios from 'axios';

axios.defaults.baseURL = 'https://mywallet.goit.co.ua/api';

export const register = user => axios.post('/register', user);

export const login = user => axios.post('/login', user);

export const logout = () => axios.get('/logout');

export const refresh = () => axios.get('/finance');
