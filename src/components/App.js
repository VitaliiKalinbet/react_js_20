import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes/routes';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route
            path={routes.REGISTRATION_PAGE.path}
            component={routes.REGISTRATION_PAGE.component}
          />
          <Route
            path={routes.LOGIN_PAGE.path}
            component={routes.LOGIN_PAGE.component}
          />
          <Route
            path={routes.DASHBOARD_PAGE.path}
            component={routes.DASHBOARD_PAGE.component}
          />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
