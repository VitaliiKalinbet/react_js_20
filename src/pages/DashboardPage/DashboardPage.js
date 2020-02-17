/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperations';
import styles from './DashboardPage.module.css';

const DashboardPage = ({ logout }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>DashboardPage</h2>
      <button className={styles.button} type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

const mDTP = dispatch => ({
  logout: () => dispatch(authOperations.logout()),
});

export default connect(null, mDTP)(DashboardPage);
