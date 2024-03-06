'use client';
import React, { useState } from 'react';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Navbar = () => {
  const [navItemsShown, setNavItemsShown] = useState<boolean>(false);

  const navItemsShownHandler = () => {
    setNavItemsShown(!navItemsShown);
  };

  const closeNavItemsHandler = () => {
    setNavItemsShown(false);
  };
  return (
    <>
      <MobileNav
        navItemsShown={navItemsShown}
        navItemsShownHandler={navItemsShownHandler}
        closeNavItemsHandler={closeNavItemsHandler}
      />
      <DesktopNav closeNavItemsHandler={closeNavItemsHandler} />
    </>
  );
};

export default Navbar;
