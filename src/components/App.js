import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes/routes';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route
            path={routes.HOME_PAGE.path}
            exact
            component={routes.HOME_PAGE.component}
          />
          <Route
            path={routes.SHOW_DETAILS_PAGE.path}
            component={routes.SHOW_DETAILS_PAGE.component}
          />
          <Route
            path={routes.SHOWS_PAGE.path}
            component={routes.SHOWS_PAGE.component}
          />
          <Redirect to={routes.HOME_PAGE.path} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
