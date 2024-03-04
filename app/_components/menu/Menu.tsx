import React from 'react';
import { menuHeros } from '@/_assets/datasets/data';
import ShowcaseImage from '@/_components/ShowcaseImage';
import SectionHeading from '../SectionHeading';

const Menu = () => {
  return (
    <section className="mt-[100px] lg:mt-[130px]">
      <SectionHeading heading={'menu.title'} />
      <ShowcaseImage heros={menuHeros} />
    </section>
  );
};

export default Menu;
