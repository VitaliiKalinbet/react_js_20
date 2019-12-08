import React from 'react';
import T from 'prop-types';
import clsx from 'clsx';
import styles from './Techlist.module.css';

const Techlist = ({ items, active, small }) => {
  const classes = clsx(
    styles.list,
    active && styles.active,
    small && styles.anotherCssClass,
  );
  return (
    <>
      <h2>Пример использования пакета clsx с CSS модулями</h2>
      <ul className={classes}>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

Techlist.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired,
    }),
  ).isRequired,
};

export default Techlist;
