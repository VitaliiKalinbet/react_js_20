/* eslint-disable import/no-cycle */
// import HomePage from '../pages/HomePage/HomePage';
// import ShowsPage from '../pages/ShowsPage/ShowsPage';
// import ShowDetailsPage from '../pages/ShowDetailsPage/ShowDetailsPage';

// Code splitting с использованием библиотеки react-loadable
// import Loadable from 'react-loadable';
// import Loader from '../components/Loader/Loader';
// const HomePage = Loadable({
//   loader: () =>
//     import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
//   loading: Loader,
// });
// const ShowsPage = Loadable({
//   loader: () =>
//     import('../pages/ShowsPage/ShowsPage' /* webpackChunkName: "shows-page" */),
//   loading: Loader,
// });
// const ShowDetailsPage = Loadable({
//   loader: () =>
//     import(
//       '../pages/ShowDetailsPage/ShowDetailsPage' /* webpackChunkName: "show-details-page" */
//     ),
//   loading: Loader,
// });

import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const ShowsPage = lazy(() =>
  import('../pages/ShowsPage/ShowsPage' /* webpackChunkName: "shows-page" */),
);
const ShowDetailsPage = lazy(() =>
  import(
    '../pages/ShowDetailsPage/ShowDetailsPage' /* webpackChunkName: "show-details-page" */
  ),
);

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
