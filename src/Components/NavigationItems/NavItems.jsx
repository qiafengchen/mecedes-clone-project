import React from 'react';
import classes from './NavItems.module.css';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import NavigationItem from './NavItem/NavItem';

const NavigationItems = (props) => {
  const [showLogin, setShowLogin] = React.useState(false);

  const showLoginModal = () => {
    setShowLogin((prev) => !prev);
  };
  return (
    <div
      style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
    >
      <ul className={classes.NavigationItems}>
        <NavigationItem>vehicles</NavigationItem>
        <NavigationItem>shopping</NavigationItem>
        <NavigationItem>inventory</NavigationItem>
      </ul>
      <div className={classes.secondaryListItems}>
        <button className={classes.secondary + ' ' + classes.finder}>
          Find a Dealer
        </button>
        <button
          className={classes.secondary + ' ' + classes.account}
          onClick={showLoginModal}
        >
          My Account
        </button>
      </div>
      <Modal show={showLogin} modalClosed={showLoginModal}>
        <Login />
      </Modal>
    </div>
  );
};

export default NavigationItems;
