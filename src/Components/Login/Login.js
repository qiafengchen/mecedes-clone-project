import React, { useEffect } from 'react';
import classes from './Login.module.css';

const Login = () => {
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const [isLogin, setIsLogin] = React.useState(false);
  const [error, setError] = React.useState();

  const switchAuthModeHandler = () => {
    setIsLogin((prev) => !prev);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const inputtedEmail = emailInputRef.current.value;
    const inputtedPassword = passwordInputRef.current.value;

    // to-do: add validation
    if (isLogin) {
    } else {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCz-pmj9-9bgynj2N4X4vrCGSZiimlMZZk`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: inputtedEmail,
            password: inputtedPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        if (res.ok) {
        } else {
          return res.json().then((data) => {
            setError(data.error.message);
          });
        }
      });
    }
  };

  return (
    <div>
      <div className={classes.titlebar}>{isLogin ? `LOGIN` : 'SIGN UP'}</div>
      <div className={classes.title}>
        <span className={classes.id}>Mercedes me ID</span>
        <text className={classes.tooltip}>?</text>
      </div>
      <text style={{ fontSize: '.8em', color: 'grey' }}>
        Please enter your e-mail address or your mobile phone number
      </text>
      <form onSubmit={submitHandler}>
        <input
          id="email"
          type="email"
          placeholder="email address"
          required
          ref={emailInputRef}
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          required
          ref={passwordInputRef}
        />
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <button className={classes.submitButton}>
            {isLogin ? 'SIGN IN' : `CREATE ACCOUNT`}
          </button>
          <button
            className={classes.signupButton}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'SWITCH TO SIGNUP' : `SWITCH TO LOGIN`}
          </button>
        </div>
      </form>
      {error}
    </div>
  );
};

export default Login;
