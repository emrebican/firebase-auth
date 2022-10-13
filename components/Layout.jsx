import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="px-16 h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
