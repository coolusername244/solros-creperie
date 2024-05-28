import React, { FC } from 'react';
import Image from 'next/image';

import Social from './Social';
import Navlinks from './Navlinks';
import LanguageSelector from './LanguageSelector';
import { navlinks, socialLinks } from '@/_assets/datasets/data';
import SolrosLogo from '@/_assets/images/site-icons/solros-logo.png';

type NavProps = {
  closeNavItemsHandler: () => void;
};

const DesktopNav: FC<NavProps> = ({ closeNavItemsHandler }) => {
  return (
    <nav className="navbar hidden xl:flex xl:sticky xl:top-0 xl:w-full z-50 light-mint bg-[#EDFFEE]">
      <div className="navbar-section">
        <div className="h-1/2 border-b border-slate-500 flex items-center">
          {socialLinks.map((socialLink, i) => (
            <Social
              key={i}
              name={socialLink.name}
              icon={socialLink.icon}
              link={socialLink.link}
            />
          ))}
        </div>
        <section className="h-1/2">
          <ul className="navbar-link-list">
            {navlinks.map((navlink, i) =>
              i < 2 ? (
                <Navlinks
                  key={i}
                  navlink={navlink}
                  closeNavItemsHandler={closeNavItemsHandler}
                />
              ) : null,
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
        <section className="h-1/2 border-b border-slate-500 flex items-center justify-end">
          <LanguageSelector />
        </section>
        <section className="h-1/2">
          <ul className="navbar-link-list">
            {navlinks.map((navlink, i) =>
              i >= 2 ? (
                <Navlinks
                  key={i}
                  navlink={navlink}
                  closeNavItemsHandler={closeNavItemsHandler}
                />
              ) : null,
            )}
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default DesktopNav;
