import React from 'react';
import { Navlink } from '@/_types/types';
import { useTranslations } from 'next-intl';

const navlinks: Navlink[] = [
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'gallery',
    path: '/gallery',
  },
];

const Navlinks = () => {
  const t = useTranslations('nav');

  return (
    <div className="h-[80vh] flex flex-col lg:inline-block justify-center lg:h-fit lg:flex-end">
      {navlinks.map((item, i) => (
        <span
          key={i}
          className="flex items-center justify-center h-[20%] lg:inline-block lg:mt-0 lg:ml-12 lg:mr-2"
        >
          <a
            href={item.path}
            className="text-white font-medium tracking-widest text-2xl lg:text-lg"
          >
            {t(item.name)}
          </a>
        </span>
      ))}
    </div>
  );
};

export default Navlinks;
