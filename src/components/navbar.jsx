import React, { useEffect, useState } from 'react';
import Magnetic from './Magnetic';
import '../App.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToProject = () => {
  window.scrollTo({ top: 720, behavior: 'smooth' });
};

const scrollToAbout = () => {
  window.scrollTo({ top: 1980, behavior: 'smooth' });
};

const scrollToContact = () => {
  window.scrollTo({ top: 7000, behavior: 'smooth' });
};

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsFixed(currentScroll <= lastScrollTop);
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={`flex justify-between z-50 h-25 w-full transition-transform ${isFixed ? 'fixed top-0 left-0' : 'absolute top-0 left-0'}`}>
      <div className='h-9 text-center mx-5 my-6 text-3xl px-1 w-35 font-extralight'>
        <h1>JK</h1>
      </div>
      <div className='flex h-9 text-right mx-10 my-6 text-2xl px-1 flex-col space-x-20 gap-0.5'>
        <div >
          <Magnetic>
            <h2 className='cursor-pointer interactive font-extralight' onClick={scrollToTop}>Home</h2>
          </Magnetic>
        </div>
        <div onClick={scrollToProject}>
          <Magnetic>
            <h2 className='cursor-pointer interactive font-extralight'>Project</h2>
          </Magnetic>
        </div>
        <div onClick={scrollToAbout}>
          <Magnetic>
            <h2 className='cursor-pointer interactive font-extralight'>About</h2>
          </Magnetic>
        </div>
        <div onClick={scrollToContact}>
          <Magnetic>
            <h2 className='cursor-pointer interactive font-extralight'>Contact</h2>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
