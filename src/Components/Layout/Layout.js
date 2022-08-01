import React from 'react';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Carousel />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
