import React from 'react';
import ShowcaseImage from '@/_components/ShowcaseImage';
import SectionHeading from '../SectionHeading';
import { offersHeros } from '@/_assets/datasets/data';
import Image from 'next/image';
import coffee from '@/_assets/images/drinks/coffee/coffee-4.jpg';

const Offers = () => {
  return (
    <section className="light-mint">
      <SectionHeading heading={'offers.title'} />
      <ShowcaseImage heros={offersHeros} />
      {/* <Image src={coffee} alt="" /> */}
      <div className="w-[75vw] m-auto pb-12">
        <Image
          src={coffee}
          alt={'coffee'}
          // fill={true}
          style={{ objectFit: 'cover' }}
          loading="eager"
          className="w-full h-96"
        />
      </div>
    </section>
  );
};

export default Offers;
