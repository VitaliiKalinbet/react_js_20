import React, { Component, lazy, Suspense } from 'react';
import Loader from '../../components/Loader/Loader';

// Пример code splitting c библиотекой react-loadable
// import Loadable from 'react-loadable';
// const HomeInfo = Loadable({
//   loader: () =>
//     import(
//       '../../components/HomePageInfo/HomePageInfo' /* webpackChunkName: "home-page-info" */
//     ),
//   loading: Loader,
// });

// Пример code splitting c lazy и Suspense
const HomeInfo = lazy(() =>
  import(
    '../../components/HomePageInfo/HomePageInfo' /* webpackChunkName: "home-page-info" */
  ),
);

class HomePage extends Component {
  state = {
    showInfo: false,
  };

  toggleInfo = () =>
    this.setState(prevState => ({ showInfo: !prevState.showInfo }));

  render() {
    const { showInfo } = this.state;
    return (
      <>
        <h2>Home Page</h2>
        <button onClick={this.toggleInfo} type="button">
          {showInfo ? 'Hide info' : 'Show info'}
        </button>
        {showInfo && (
          <Suspense fallback={<Loader />}>
            <HomeInfo />
          </Suspense>
        )}
      </>
    );
  }
}

export default HomePage;
