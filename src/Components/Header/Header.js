import React from 'react';

import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';

const toolbar = () => (
  <header className={classes.Header}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <NavItems />
  </header>
);

export default toolbar;
