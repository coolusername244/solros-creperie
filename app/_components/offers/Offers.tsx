import React from 'react';
import ShowcaseImage from '@/_components/ShowcaseImage';
import SectionHeading from '../SectionHeading';
import { offersHeros } from '@/_assets/datasets/data';

const Offers = () => {
  return (
    <section>
      <SectionHeading heading={'offers.title'} />
      <ShowcaseImage heros={offersHeros} cols={3} />
    </section>
  );
};

export default Offers;
