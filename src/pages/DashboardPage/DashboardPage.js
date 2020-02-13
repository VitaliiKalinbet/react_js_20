import React from 'react';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>DashboardPage</h2>
      <button className={styles.button} type="button">
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
