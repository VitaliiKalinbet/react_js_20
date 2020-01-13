import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink
          exact
          activeStyle={{ color: 'green' }}
          to={routes.HOME_PAGE.path}
        >
          Home page
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: 'green' }} to={routes.SHOWS_PAGE.path}>
          Shows page
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
