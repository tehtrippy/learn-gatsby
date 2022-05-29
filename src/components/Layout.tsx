import React from 'react';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className='max-w-5xl px-6 py-4 mx-auto'>{children}</div>
    </div>
  );
};

export default Layout;
