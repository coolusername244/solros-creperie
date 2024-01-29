import React from 'react';
import Navlinks from './Navlinks';
import { GiSunflower } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="flex justify-between flex-wrap bg-green-900 text-white p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <a href="/" className="text-4xl ">
          <GiSunflower />
        </a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <Navlinks />
    </nav>
  );
};

export default Navbar;
