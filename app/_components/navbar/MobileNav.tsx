'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

import Social from './Social';
import Navlinks from './Navlinks';
import LanguageSelector from './LanguageSelector';
import { navlinks, socialLinks } from '@/_assets/datasets/data';
import SolrosLogo from '@/_assets/images/site-icons/solros-logo.png';

const MobileNav = () => {
  const [navItemsShown, setNavItemsShown] = useState<boolean>(false);

  const navItemsShownHandler = () => {
    setNavItemsShown(!navItemsShown);
  };

  return (
    <nav className="navbar block fixed top-0 w-full z-50 screen-content xl:hidden">
      <div className="flex flex-wrap items-center px-6 relative">
        <a href="#">
          <Image
            src={SolrosLogo}
            alt="Solros Creperie Logo"
            className="navbar-logo"
            priority
          />
        </a>
        <div className="flex ml-auto">
          <button onClick={navItemsShownHandler}>
            {navItemsShown ? (
              <span className="text-4xl">
                <IoCloseOutline />
              </span>
            ) : (
              <span className="text-3xl">
                <RxHamburgerMenu />
              </span>
            )}
          </button>
        </div>
        <div className={`${navItemsShown ? 'block' : 'hidden'} w-full`}>
          <ul className="text-center flex flex-col items-center">
            {navlinks.map((navlink, i) => (
              <Navlinks key={i} navlink={navlink} />
            ))}
            <li className="flex items-center justify-center space-x-8 py-6">
              {socialLinks.map((socialLink, i) => (
                <Social
                  key={i}
                  name={socialLink.name}
                  icon={socialLink.icon}
                  link={socialLink.link}
                />
              ))}
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
