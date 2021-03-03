import Navbar from '../Navbar/Navbar';
import React from 'react';

export const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
