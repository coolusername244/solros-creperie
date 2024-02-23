import React from 'react';
import ShowcaseImage from '@/_components/ShowcaseImage';
import { useTranslations } from 'next-intl';
import { Hero } from '@/_types/types';

import galette1 from '@/_assets/images/food/galettes/galette-1.jpg';
import pancake1 from '@/_assets/images/food/pancakes/pancake-1.jpg';
import panini1 from '@/_assets/images/food/paninis/panini-1.jpg';

const Offers = () => {
  const t = useTranslations('menu');
  const heros: Hero[] = [
    {
      title: t('galettes'),
      image: galette1,
    },
    {
      title: t('crepes'),
      image: pancake1,
    },
    {
      title: t('paninis'),
      image: panini1,
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-center pt-12 text-3xl font-semibold">
        <h2>Offers</h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-12 p-12 2xl:px-32">
        {heros.map((hero, index) => (
          <ShowcaseImage hero={hero} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Offers;
