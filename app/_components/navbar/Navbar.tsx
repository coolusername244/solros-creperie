'use client';
import React, { useState } from 'react';
import Navlinks from './Navlinks';
import LanguageSelector from './LanguageSelector';
import { GiSunflower } from 'react-icons/gi';

const Navbar = () => {
  const [navItemsShown, setNavItemsShown] = useState<boolean>(false);

  return (
    <nav className="flex justify-between flex-wrap bg-primary text-white p-6">
      <div className="flex mr-6">
        <a href="/" className="text-4xl">
          <GiSunflower />
        </a>
      </div>
      <div className="flex">
        <div className="flex items-center lg:hidden">
          <LanguageSelector />
          <button
            className="flex"
            onClick={() => {
              setNavItemsShown(!navItemsShown);
            }}
          >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          navItemsShown ? 'inline' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
