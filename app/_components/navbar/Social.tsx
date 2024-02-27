import React, { FC } from 'react';
import Link from 'next/link';
import { SocialLink } from '@/_types/types';

const Social: FC<SocialLink> = ({ name, icon, link }) => {
  return (
    <button className="navbar-link text-2xl">
      <Link target="_blank" className="flex items-center" href={link}>
        {icon}{' '}
        <span className="hidden lg:flex ml-1 text-sm lowercase">
          solroscreperie
        </span>
      </Link>
    </button>
  );
};

export default Social;
