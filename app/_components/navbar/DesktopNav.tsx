'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import LanguageSelector from './LanguageSelector';
import SolrosLogo from '@/_assets/images/site-icons/solros-logo.png';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const DesktopNav = () => {
  const t = useTranslations('nav');

  const [activeSection, setActiveSection] = useState<string | null>('menu');

  const navbarHeight = window.innerWidth >= 1024 ? 130 : 100;

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll('section'));

      for (const section of sections) {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - navbarHeight;
        const sectionBottom = sectionTop + section.offsetHeight - navbarHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleClick = (name: string) => {
    const element = document.getElementById(name);

    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar hidden xl:flex xl:sticky xl:top-0 xl:w-full z-50 light-mint bg-[#EDFFEE]">
      <div className="navbar-section">
        <div className="h-1/2 border-b border-slate-500 flex items-center">
          <button className="navbar-link text-2xl">
            <Link
              target="_blank"
              className="flex items-center"
              href={'https://www.instagram.com/solroscreperie'}
            >
              <FaInstagram />{' '}
              <span className="hidden lg:flex ml-1 text-sm lowercase">
                solroscreperie
              </span>
            </Link>
          </button>
        </div>
        <div className="h-1/2">
          <ul className="navbar-link-list">
            <li className="navbar-li">
              <button
                onClick={() => handleClick('menu')}
                className={`navbar-link ${
                  activeSection === 'menu' ? 'active' : ''
                }`}
              >
                {t('menu')}
              </button>
            </li>
            <li className="navbar-li">
              <button
                onClick={() => handleClick('offers')}
                className={`navbar-link ${
                  activeSection === 'offers' ? 'active' : ''
                }`}
              >
                {t('offers')}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Image
        src={SolrosLogo}
        alt="Solros Creperie Logo"
        className="navbar-logo"
        priority
      />
      <div className="navbar-section">
        <div className="h-1/2 border-b border-slate-500 flex items-center justify-end">
          <LanguageSelector />
        </div>
        <div className="h-1/2">
          <ul className="navbar-link-list">
            <li className="navbar-li">
              <button
                onClick={() => handleClick('about')}
                className={`navbar-link ${
                  activeSection === 'about' ? 'active' : ''
                }`}
              >
                {t('about')}
              </button>
            </li>
            <li className="navbar-li">
              <button
                onClick={() => handleClick('contact')}
                className={`navbar-link ${
                  activeSection === 'contact' ? 'active' : ''
                }`}
              >
                {t('contact')}
              </button>
            </li>
            <li className="navbar-li">
              <Link href={'/prices'} className="navbar-link">
                {t('prices')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
