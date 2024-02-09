import React from 'react';
import Image from 'next/image';
import smoothie1 from '@/_assets/drinks/smoothies/smoothie-1.jpg';
import galette1 from '@/_assets/food/galettes/galette-1.jpg';
import pancake1 from '@/_assets/food/pancakes/pancake-1.jpg';
import panini1 from '@/_assets/food/paninis/panini-1.jpg';
import { Hero } from '@/_types/types';

const Gallery = () => {
  const heros: Hero[] = [
    {
      title: 'Drinks',
      image: smoothie1,
    },
    {
      title: 'Pancakes',
      image: pancake1,
    },
    {
      title: 'Galettes',
      image: galette1,
    },
    {
      title: 'Paninis',
      image: panini1,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center pt-12 text-3xl font-semibold">
        <h1>Gallery</h1>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 p-12">
        {heros.map((hero, i) => (
          <div
            key={i}
            className={`relative h-96 ${
              i !== 0 ? 'mt-12 lg:mt-0' : ''
            } shadow-2xl rounded-md`}
          >
            <Image
              src={hero.image}
              alt={hero.title}
              layout="fill"
              objectFit="cover"
              loading="eager"
              className="rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md">
              <h2 className="text-white text-3xl font-bold tracking-wide">
                {hero.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
