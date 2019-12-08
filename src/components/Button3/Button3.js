import React from 'react';
import clsx from 'clsx';
import styles from './Button3.module.css';

// console.log(styles);

const Button3 = ({ propDisabled }) => {
  const classes = clsx(styles.button, propDisabled ? styles.disabled : styles.active);
  return (
    <>
      <button className={classes} disabled={propDisabled}>
        Submit3
      </button>
      <p className={`${styles.text} ${styles.primary}`}>Hello world!</p>
      <h4 className={styles.title}>
        Use css var and composes class from another module css file
      </h4>
    </>
  );
};

export default Button3;
