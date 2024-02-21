import React, { FC } from 'react';
import Link from 'next/link';
import { Navlink } from '@/_types/types';
import { useTranslations, useLocale } from 'next-intl';

type NavlinksProps = {
  navlink: Navlink;
};

const Navlinks: FC<NavlinksProps> = ({ navlink }) => {
  const t = useTranslations('nav');
  const userLocale = useLocale();

  return (
    <>
      <li className="navbar-li">
        <Link href={`/${userLocale}/${navlink.name}`} className="navbar-link">
          {t(navlink.name)}
        </Link>
      </li>
    </>
  );
};

export default Navlinks;
