import React from 'react';
import classes from './Login.module.css';

const Login = () => {
  return (
    <div>
      <div className={classes.titlebar}>Login</div>
      <div className={classes.title}>
        <span className={classes.id}>Mercedes me ID</span>
        <text className={classes.tooltip}>?</text>
      </div>
      <text style={{ fontSize: '.8em', color: 'grey' }}>
        Please enter your e-mail address or your mobile phone number
      </text>
      <input id="email" name="email" type="email" placeholder="email address" />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="password"
      />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className={classes.submitButton}>SUBMIT</div>
        <div className={classes.signupButton}>SIGNUP</div>
      </div>
    </div>
  );
};

export default Login;
