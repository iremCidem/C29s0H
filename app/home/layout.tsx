import React from 'react';

const Layout = ({ children }: any) => {
  return (
    <div>
      <h1>header</h1>
      <div>{children}</div>
      <h3>footer</h3>
    </div>
  );
};

export default Layout;
