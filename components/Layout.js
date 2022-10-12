import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="mx-16">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
