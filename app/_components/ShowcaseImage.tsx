import React, { FC } from 'react';
import Image from 'next/image';
import { Hero } from '@/_types/types';

type ShowcaseImageProps = {
  hero: Hero;
  key: number;
};

const ShowcaseImage: FC<ShowcaseImageProps> = ({ hero, key }) => {
  return (
    <div
      key={key}
      className={`relative h-96 ${
        key !== 0 ? 'mt-12 lg:mt-0' : ''
      } shadow-2xl rounded-md group overflow-hidden`}
    >
      <Image
        src={hero.image}
        alt={hero.title}
        layout="fill"
        objectFit="cover"
        loading="eager"
        className="rounded-md group-hover:scale-110 transition-transform"
      />
      <div className="cursor-pointer absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md hover:bg-opacity-50 transition duration-300">
        <h2 className="text-white text-3xl font-bold tracking-wide group-hover:tracking-widest transition-all">
          {hero.title}
        </h2>
      </div>
    </div>
  );
};

export default ShowcaseImage;
