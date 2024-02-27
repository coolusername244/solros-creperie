import React from 'react';
import { menuHeros } from '@/_assets/datasets/data';
import ShowcaseImage from '@/_components/ShowcaseImage';
import SectionHeading from '../SectionHeading';

const Menu = () => {
  return (
    <main className="screen-content">
      <SectionHeading heading={'menu.title'} />
      <ShowcaseImage heros={menuHeros} cols={3} />
    </main>
  );
};

export default Menu;
