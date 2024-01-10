import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/joelLogo.PNG';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';



const Header = () => {
  return (
   <header className=' fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
    {/* logo */}
    <Link to={'/'} className='max-w-[200px]'>
      <img src={Logo} alt="" />
    </Link>
    {/* nav - initially hidden - show on desktop mode */}

    <nav className='hidden xl:flex gap-x-12 font-semibold '>

      <Link to={'/'} className='text-[#696c6d] hover:text-primary transition' >
       Home
      </Link>
     
      <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition' >
       About
      </Link>
     
      <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition' >
       Portfolio
      </Link>
     
      <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition' >
       Contact
      </Link>

    </nav>
    
    </div>
    {/* socials */}
    <Socials />
    {/* mobile nav - initially shown - hide on desktop mode */}
    <MobileNav />

  </header>
  );
};

export default Header;
