import React, { useState, useEffect, useRef } from 'react';
import logoImage from '../assets/images/logo.png';
import headerImage from '../assets/images/download.png';
import Button from '../components/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector("#page-header");
    const topBar = document.querySelector(".main-top-bar");
    const toggleClass = "fixed-nav";
    const maxH = "topBar";

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        header.classList.add(toggleClass);
        topBar.classList.add(maxH);
      } else {
        header.classList.remove(toggleClass);
        topBar.classList.remove(maxH);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header id="page-header" className={`w-full fixed top-0 left-0 transition-all duration-500 z-20 ${isMenuOpen ? 'bg-[rgb(4,22,37)]' : ''}`}>
      <div className='main-top-bar bg-primary text-white text-sm text-light font-semibold overflow-hidden transition-all duration-300 pt-2 pb-1 z-10'>
        <marquee direction="left">
          <div className='flex gap-10'>
            <div className="">
              Private sale phase -I -
              <span className="text-red-500">(sold out)</span>
            </div>
            <div className="">
              Now at $0.00011 and will be Listing at $0.015
            </div>
          </div>
        </marquee>
      </div>
      <div className='py-3'>
        <div className='container relative z-20'>
          <div className="grid grid-cols-10">
            <div className='col-span-4 md:col-span-2'>
              <div className='flex justify-between items-center'>
                <a href="preventDefault();">
                  <img src={logoImage} alt="" className='w-full h-14' />
                </a>
              </div>
            </div>
            <div className='col-span-6 md:col-span-8'>
              <div className='flex items-center justify-end gap-3 md:gap-8'>
                <nav ref={menuRef} className={`max-lg:bg-secondary-dark max-lg:absolute top-full left-0 max-lg:z-20 max-lg:w-full overflow-hidden max-lg:drop-shadow-white transition-all duration-500 ${isMenuOpen ? 'max-lg:max-h-screen' : 'max-lg:max-h-0'}`}>
                  <ul className='flex max-lg:flex-col lg:items-center justify-end gap-6 lg:gap-8 text-base text-white [&>li>a]:font-medium [&>li>a:hover]:text-secondary tracking-widest [&>li>a]:transition-all [&>li>a]:duration-500 max-lg:py-6 max-lg:px-4 [&>li>a]:font-trajan relative z-10'>
                    <li><a href="preventDefault();">Home</a></li>
                    <li><a href="preventDefault();">Blogs</a></li>
                    <li>
                      <a href="preventDefault();">
                        <span className="relative before:absolute before:content-['✘'] before:block before:text-2xl before:-top-1 before:left-1 before:text-red-600 before:opacity-80 before:font-bold">Wh</span>
                        <span className="text-secondary">N</span>
                        ite paper
                      </a>
                    </li>
                    <li className="md:hidden">
                      <Button buttonName="Connect Tron Wallet" />
                    </li>
                    <li className="md:hidden">
                      <Button buttonName="Connect Wallet" />
                    </li>
                  </ul>
                </nav>
                <div className="max-md:hidden">
                  <Button buttonName="Connect Tron Wallet" />
                </div>
                <div className="flex items-center">
                  <div>
                    <img src={headerImage} alt="" />
                  </div>
                </div>
                <div className="lg:hidden">
                  <button
                    onClick={handleMenuToggle}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white-light border-opacity-20 text-white-light rounded-lg"
                    fdprocessedid="40twpe"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 -z-10"
          onClick={handleClickOutside}
        ></div>
      )}
    </header>
  );
}

export default Header;
