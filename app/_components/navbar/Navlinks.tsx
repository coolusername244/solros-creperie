'use client';
import React, { FC, useState, useEffect } from 'react';
import { Navlink } from '@/_types/types';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

type NavlinksProps = {
  navlink: Navlink;
  closeNavItemsHandler: () => void;
};

const Navlinks: FC<NavlinksProps> = ({ navlink, closeNavItemsHandler }) => {
  const t = useTranslations('nav');
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkActive = () => {
      const element = document.getElementById(navlink.name);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const navbarHeight = window.innerWidth >= 1024 ? 130 : 100;
        setIsActive(top <= navbarHeight && bottom > navbarHeight);
      } else {
        setIsActive(false);
      }
    };

    checkActive();
    window.addEventListener('scroll', checkActive);

    return () => window.removeEventListener('scroll', checkActive);
  }, [navlink.name]);

  const handleClick = (name: string) => {
    if (
      pathname !== '/' &&
      !pathname.endsWith('/en') &&
      !pathname.endsWith('/ua')
    ) {
      router.back();
    }
    setTimeout(() => {
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
    }, 50);
  };

  return (
    <>
      <li className="navbar-li">
        <button
          className={`navbar-link ${isActive ? 'active' : ''}`}
          onClick={() => {
            closeNavItemsHandler();
            handleClick(navlink.name);
          }}
        >
          {t(navlink.name)}
        </button>
      </li>
    </>
  );
};

export default Navlinks;
