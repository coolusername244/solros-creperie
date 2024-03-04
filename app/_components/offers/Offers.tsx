import React from 'react';
import ShowcaseImage from '@/_components/ShowcaseImage';
import SectionHeading from '../SectionHeading';
import { offersHeros } from '@/_assets/datasets/data';

const Offers = () => {
  return (
    <section className="light-mint">
      <SectionHeading heading={'offers.title'} />
      <ShowcaseImage heros={offersHeros} />
    </section>
  );
};

export default Offers;
