import React from 'react';
import { Navlink } from '@/_types/types';

const navlinks: Navlink[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
];

const Navlinks = () => {
  return (
    <div className="w-full lg:flex lg:justify-end lg:items-center lg:w-auto">
      <div className="text-xl lg:flex-grow">
        {navlinks.map((navlink, i) => (
          <span
            key={i}
            className="flex justify-end mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            <a href={navlink.path}>{navlink.name}</a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navlinks;
