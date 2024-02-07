import React from 'react';
import Link from 'next/link';
import { Navlink } from '@/_types/types';
import { useTranslations, useLocale } from 'next-intl';

const navlinks: Navlink[] = [
  {
    name: 'about',
  },
  {
    name: 'gallery',
  },
];

const Navlinks = () => {
  const t = useTranslations('nav');
  const userLocale = useLocale();

  return (
    <div className="h-[80vh] flex flex-col lg:inline-block justify-center lg:h-fit lg:flex-end">
      {navlinks.map((item, i) => (
        <span
          key={i}
          className="flex items-center justify-center h-[20%] lg:inline-block lg:mt-0 lg:ml-6 lg:mr-2"
        >
          <Link
            href={`/${userLocale}/${item.name}`}
            className="text-white font-medium tracking-widest text-2xl lg:text-lg"
          >
            {t(item.name)}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Navlinks;
