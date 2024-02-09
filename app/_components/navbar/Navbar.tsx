'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Navlinks from './Navlinks';
import LanguageSelector from './LanguageSelector';
import SunFlower from '@/_assets/site-icons/logo-no-background-no-text.png';

const Navbar = () => {
  const [navItemsShown, setNavItemsShown] = useState<boolean>(false);

  const navItemsShownHandler = () => {
    setNavItemsShown(false);
  };

  return (
    <nav className="flex justify-between flex-wrap bg-primary text-white p-6">
      <div className="flex mr-6">
        <Link href="/">
          <Image
            priority={true}
            src={SunFlower}
            alt="Sunflower"
            width={500}
            height={500}
            className="h-12 w-12"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex mr-4 lg:hidden">
          <LanguageSelector />
        </div>
        <button
          className="flex lg:hidden"
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
          navItemsShown ? 'inline' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <div className="hidden lg:flex">
          <LanguageSelector />
        </div>
        <Navlinks navItemsShownHandler={navItemsShownHandler} />
      </div>
    </nav>
  );
};

export default Navbar;
