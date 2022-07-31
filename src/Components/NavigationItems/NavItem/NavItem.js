import React from 'react';

import classes from './NavItem.module.css';

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a exact={props.exact} to={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
