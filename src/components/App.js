/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import routes from '../routes/routes';
import * as authOperations from '../redux/auth/authOperations';

class App extends Component {
  componentDidMount() {
    const { refresh } = this.props;
    refresh();
  }

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
          <ProtectedRoute
            path={routes.DASHBOARD_PAGE.path}
            component={routes.DASHBOARD_PAGE.component}
          />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

const mDTP = dispatch => ({
  refresh: () => dispatch(authOperations.refresh()),
});

export default connect(null, mDTP)(App);
