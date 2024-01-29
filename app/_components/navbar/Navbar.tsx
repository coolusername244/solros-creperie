'use client';
import React, { useState } from 'react';
import Navlinks from './Navlinks';
import { GiSunflower } from 'react-icons/gi';

const Navbar = () => {
  const [navItemsShown, setNavItemsShown] = useState(false);

  return (
    <nav className="flex justify-between flex-wrap bg-green-900 text-white p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <a href="/" className="text-4xl ">
          <GiSunflower />
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2"
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
      <div
        className={`${
          navItemsShown ? '' : 'hidden'
        } w-full lg:flex lg:justify-end lg:items-center lg:w-auto`}
      >
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
