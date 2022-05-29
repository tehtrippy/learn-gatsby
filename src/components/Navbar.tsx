import React from 'react';
import { changeLocale, navigate } from 'gatsby-plugin-intl';

const Navbar: React.FC<{}> = () => {
  return (
    <div className='flex items-center justify-between px-6 py-4'>
      <div className='flex items-center space-x-4'>
        <p onClick={() => navigate('/')}>Home</p>
        <p onClick={() => navigate('/about')}>About</p>
      </div>
      <div className='flex items-center space-x-4'>
        <p onClick={() => changeLocale('ko')} className='cursor-pointer'>
          KO 🇰🇷
        </p>
        <p onClick={() => changeLocale('en')} className='cursor-pointer'>
          EN 🏴󠁧󠁢󠁥󠁮󠁧󠁿
        </p>
      </div>
    </div>
  );
};

export default Navbar;
