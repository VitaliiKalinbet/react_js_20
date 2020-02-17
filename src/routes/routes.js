/* eslint-disable import/no-cycle */
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

export default {
  REGISTRATION_PAGE: {
    path: '/register',
    component: RegistrationPage,
  },
  LOGIN_PAGE: {
    path: '/login',
    component: LoginPage,
  },
  DASHBOARD_PAGE: {
    path: '/main',
    component: DashboardPage,
  },
};
