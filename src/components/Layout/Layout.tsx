import Navbar from '../Navbar/Navbar';
import React from 'react';
// TODO:  make navbar layout wrapper sticky when scrolling

export const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
