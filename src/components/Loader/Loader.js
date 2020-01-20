import React from 'react';
import Spinner from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.overlay}>
      <Spinner type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;
