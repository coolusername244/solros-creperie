import React, { FC } from 'react';
import Link from 'next/link';
import { SocialLink } from '@/_types/types';

const Social: FC<SocialLink> = ({ name, icon, link }) => {
  return (
    <button key={name} className="navbar-link text-2xl">
      <Link target="_blank" href={link}>
        {icon}
      </Link>
    </button>
  );
};

export default Social;
