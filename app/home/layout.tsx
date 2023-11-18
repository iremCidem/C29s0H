import Header from '@/components/Header';
import React from 'react';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className='px-[60px]'>{children}</div>
    </div>
  );
};

export default Layout;
