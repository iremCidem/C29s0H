import Header from '@/components/Header';
import React from 'react';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
