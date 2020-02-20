/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import routes from '../routes/routes';
import * as authOperations from '../redux/auth/authOperations';
import * as authSelectors from '../redux/auth/authSelectors';
import Loader from './Loader/Loader';

class App extends Component {
  componentDidMount() {
    const { refresh } = this.props;
    refresh();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading && <Loader />}
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

const mSTP = store => ({
  isLoading: authSelectors.getIsLoading(store),
});

const mDTP = dispatch => ({
  refresh: () => dispatch(authOperations.refresh()),
});

export default connect(mSTP, mDTP)(App);
