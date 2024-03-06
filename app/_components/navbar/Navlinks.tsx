'use client';
import React, { FC } from 'react';
import { Navlink } from '@/_types/types';
import { useTranslations } from 'next-intl';

type NavlinksProps = {
  navlink: Navlink;
};

const Navlinks: FC<NavlinksProps> = ({ navlink }) => {
  const t = useTranslations('nav');

  const handleClick = (name: string) => {
    const element = document.getElementById(name);
    // small device navbar height
    let navbarHeight = 100;

    if (window.innerWidth >= 1024) {
      // large device navbar height
      navbarHeight = 130;
    }

    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset - navbarHeight,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <li className="navbar-li">
        <button
          className="navbar-link"
          onClick={() => handleClick(navlink.name)}
        >
          {t(navlink.name)}
        </button>
      </li>
    </>
  );
};

export default Navlinks;
