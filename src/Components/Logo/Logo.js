import React from 'react';

import MBLogo from '../../assets/Mercedes_Benz_Logo.png';
import classes from './Logo.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={MBLogo} alt="logo" />
  </div>
);

export default logo;
