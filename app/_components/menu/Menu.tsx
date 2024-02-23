import React from 'react';
import { useTranslations } from 'next-intl';

import smoothie1 from '@/_assets/images/drinks/smoothies/smoothie-1.jpg';
import galette1 from '@/_assets/images/food/galettes/galette-1.jpg';
import pancake1 from '@/_assets/images/food/pancakes/pancake-1.jpg';
import panini1 from '@/_assets/images/food/paninis/panini-1.jpg';
import coffee1 from '@/_assets/images/drinks/coffee/coffee-4.jpg';
import { Hero } from '@/_types/types';
import ShowcaseImage from '@/_components/ShowcaseImage';

const Menu = () => {
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
    {
      title: t('kids'),
      image: panini1,
    },
    {
      title: t('coffee-and-tea'),
      image: coffee1,
    },
    {
      title: t('other-drinks'),
      image: smoothie1,
    },
  ];

  return (
    <main className="screen-content">
      <div className="flex items-center justify-center pt-12 text-3xl font-semibold">
        <h2>{t('title')}</h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-12 p-12 2xl:px-32">
        {heros.map((hero, index) => (
          <ShowcaseImage hero={hero} key={index} />
        ))}
      </div>
    </main>
  );
};

export default Menu;
