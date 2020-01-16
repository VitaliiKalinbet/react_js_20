/* eslint-disable import/no-cycle */
import HomePage from '../pages/HomePage/HomePage';
import ShowsPage from '../pages/ShowsPage/ShowsPage';
import ShowDetailsPage from '../pages/ShowDetailsPage/ShowDetailsPage';

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  SHOW_DETAILS_PAGE: {
    path: '/shows/:showID',
    component: ShowDetailsPage,
  },
  SHOWS_PAGE: {
    path: '/shows',
    component: ShowsPage,
  },
};
