'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Navlinks from './Navlinks';
import LanguageSelector from './LanguageSelector';
import SunFlower from '@/_assets/site-icons/logo-no-background-no-text.png';
import SolrosLogo from '@/_assets/site-icons/solros-logo.png';
import { SocialLink } from '@/_types/types';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [navItemsShown, setNavItemsShown] = useState<boolean>(false);

  const socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/solroscreperie',
    },
  ];

  const navItemsShownHandler = () => {
    setNavItemsShown(false);
  };

  return (
    <nav className="border-b border-slate-500 flex justify-between px-6">
      <div className="w-full flex flex-col">
        <div className="h-1/2 border-b flex items-center">
          <button className="text-2xl hover:text-primary transition duration-200">
            <FaInstagram />
          </button>
        </div>
        <section className="h-1/2">
          <ul className="flex h-full items-center justify-evenly uppercase text-xl tracking-widest">
            <li>
              <Link
                href={'/'}
                className="hover:text-primary transition duration-200"
              >
                menu
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="hover:text-primary transition duration-200"
              >
                erb
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="hover:text-primary transition duration-200"
              >
                nyh
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <Image
        src={SolrosLogo}
        alt="Solros Creperie Logo"
        className="w-28 py-3"
      />
      <div className="w-full flex flex-col">
        <section className="h-1/2 border-b flex items-center justify-end">
          <LanguageSelector />
        </section>
        <section className="grow">
          <ul className="flex h-full items-center justify-evenly uppercase text-xl tracking-widest">
            <li>
              <Link
                href={'/'}
                className="hover:text-primary transition duration-200"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="hover:text-primary transition duration-200"
              >
                contact
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
