import React from 'react';
import './Button.css';

const Button2 = props => {
  const btnClasses = ['Button'];

  if (props.propDisabled) {
    btnClasses.push('Button--disabled');
  }

  return <button className={btnClasses.join(' ')}>Submit2</button>;
};

export default Button2;
