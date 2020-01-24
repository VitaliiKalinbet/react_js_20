import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Header.css';

const Header = () => {
  return (
    <CSSTransition in timeout={5000} classNames="Header" appear>
      <header className="content">
        <h2>Header</h2>
      </header>
    </CSSTransition>
  );
};

export default Header;
