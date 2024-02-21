import React from 'react';
import Image from 'next/image';

import Social from './Social';
import Navlinks from './Navlinks';
import LanguageSelector from './LanguageSelector';
import { navlinks, socialLinks } from '@/_assets/datasets/data';
import SolrosLogo from '@/_assets/images/site-icons/solros-logo.png';

const DesktopNav = () => {
  return (
    <nav className="navbar hidden lg:flex">
      <div className="navbar-section">
        <div className="h-1/2 border-b flex items-center">
          {socialLinks.map(socialLink => (
            <Social
              key={socialLink.name}
              name={socialLink.name}
              icon={socialLink.icon}
              link={socialLink.link}
            />
          ))}
        </div>
        <section className="h-1/2">
          <ul className="navbar-link-list">
            {navlinks.map((navlink, i) =>
              i < 3 ? <Navlinks key={i} navlink={navlink} /> : null,
            )}
          </ul>
        </section>
      </div>
      <Image
        src={SolrosLogo}
        alt="Solros Creperie Logo"
        className="navbar-logo"
        priority
      />
      <div className="navbar-section">
        <section className="h-1/2 border-b flex items-center justify-end">
          <LanguageSelector />
        </section>
        <section className="h-1/2">
          <ul className="navbar-link-list">
            {navlinks.map((navlink, i) =>
              i >= 3 ? <Navlinks key={navlink.name} navlink={navlink} /> : null,
            )}
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default DesktopNav;
