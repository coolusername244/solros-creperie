'use client';
import React, { FC } from 'react';
import { Navlink } from '@/_types/types';
import { useTranslations } from 'next-intl';
import { handleClick } from '../../../helpers';

type NavlinksProps = {
  navlink: Navlink;
  closeNavItemsHandler: () => void;
};

const Navlinks: FC<NavlinksProps> = ({ navlink, closeNavItemsHandler }) => {
  const t = useTranslations('nav');

  return (
    <>
      <li className="navbar-li">
        <button
          className="navbar-link"
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
