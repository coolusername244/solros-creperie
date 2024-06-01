'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';

import SolrosLogo from '@/_assets/images/site-icons/solros-logo.png';
import LanguageSelector from './LanguageSelector';
import { usePathname, useRouter } from 'next/navigation';

const Nav = () => {
  const [navItemsShown, setNavItemsShown] = useState<boolean>(false);
  const router = useRouter();
  const t = useTranslations('nav');

  const navItemsShownHandler = () => {
    setNavItemsShown(!navItemsShown);
  };

  const closeNavItemsHandler = () => {
    setNavItemsShown(false);
  };

  const goHome = () => {
    console.log('clicked');
    router.push('/');
  };

  // Smooth scroll to section
  const handleClick = (name: string) => {
    const element = document.getElementById(name);
    let navbarHeight = 100;

    if (window.innerWidth >= 1024) {
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
      {/* MOBILE NAV */}

      <nav className="xl:hidden navbar block fixed top-0 w-full z-50 bg-[#EDFFEE]">
        <div className="flex flex-wrap items-center px-6 relative">
          <Image
            src={SolrosLogo}
            alt="Solros Creperie Logo"
            className="navbar-logo"
            priority
          />
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
              <li className="navbar-li">
                <button
                  className="navbar-link"
                  onClick={() => {
                    handleClick('menu');
                    closeNavItemsHandler();
                  }}
                >
                  {t('menu')}
                </button>
              </li>

              <button
                className="navbar-link navbar-li"
                onClick={() => {
                  handleClick('offers');
                  closeNavItemsHandler();
                }}
              >
                {t('offers')}
              </button>
              <button
                className="navbar-link navbar-li"
                onClick={() => {
                  handleClick('about');
                  closeNavItemsHandler();
                }}
              >
                {t('about')}
              </button>
              <button
                className="navbar-link navbar-li"
                onClick={() => {
                  handleClick('contact');
                  closeNavItemsHandler();
                }}
              >
                {t('contact')}
              </button>
              <li className="flex items-center justify-center space-x-8 py-6">
                <button className="navbar-link text-2xl">
                  <Link
                    target="_blank"
                    className="flex items-center"
                    href={'https://www.instagram.com/solroscreperie'}
                  >
                    <FaInstagram />
                    <span className="hidden xl:flex ml-1 text-sm lowercase">
                      solroscreperie
                    </span>
                  </Link>
                </button>
                <LanguageSelector />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* DESKTOP NAV */}
      <nav className="navbar hidden xl:shadow-lg xl:flex xl:fixed xl:top-0 xl:w-full z-50 light-mint bg-[#EDFFEE]">
        <div className="navbar-section">
          <div className="h-1/2 border-b border-slate-500 flex items-center">
            <button className="navbar-link text-2xl">
              <Link
                target="_blank"
                className="flex items-center"
                href={'https://www.instagram.com/solroscreperie'}
              >
                <FaInstagram />
                <span className="hidden xl:flex ml-1 text-sm lowercase">
                  solroscreperie
                </span>
              </Link>
            </button>
          </div>
          <section className="h-1/2">
            <ul className="navbar-link-list">
              <li>
                <button
                  className="navbar-link"
                  onClick={() => handleClick('menu')}
                >
                  {t('menu')}
                </button>
              </li>
              <li>
                <button
                  className="navbar-link"
                  onClick={() => handleClick('offers')}
                >
                  {t('offers')}
                </button>
              </li>
            </ul>
          </section>
        </div>
        <Image
          src={SolrosLogo}
          alt="Solros Creperie Logo"
          className="navbar-logo"
          priority
          onClick={() => {
            goHome();
          }}
        />
        <div className="navbar-section">
          <section className="h-1/2 border-b border-slate-500 flex items-center justify-end">
            <LanguageSelector />
          </section>
          <section className="h-1/2">
            <div className="navbar-link-list">
              <button
                className="navbar-link"
                onClick={() => handleClick('about')}
              >
                {t('about')}
              </button>
              <button
                className="navbar-link"
                onClick={() => handleClick('contact')}
              >
                {t('contact')}
              </button>
              {/* <Link href={`/${locale}/order`} className="navbar-link">
                Order
              </Link> */}
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Nav;
