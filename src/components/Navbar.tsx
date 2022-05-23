import React from 'react';
import { Link } from 'gatsby';

const Navbar: React.FC<{}> = () => {
  return (
    <div className='flex items-center px-6 py-4 space-x-4'>
      <Link to='/'>Home</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/about'>About</Link>
    </div>
  );
};

export default Navbar;
