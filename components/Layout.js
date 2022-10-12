import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="px-16 h-screen bg-gray-400">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
