import React, { FC } from 'react';
import Image from 'next/image';
import { Hero } from '@/_types/types';
import { useTranslations } from 'next-intl';

type ShowcaseImageProps = {
  heros: Hero[];
};

const ShowcaseImage: FC<ShowcaseImageProps> = ({ heros }) => {
  const t = useTranslations();

  return (
    <div
      className={`grid ${
        heros.length >= 3 ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2'
      } gap-12 px-16 pb-16`}
    >
      {heros.map((hero, i) => (
        <div
          key={i}
          className={`relative h-64 lg:h-96 shadow-2xl rounded-md group overflow-hidden`}
        >
          <Image
            src={hero.image}
            alt={t(hero.title)}
            fill={true}
            style={{ objectFit: 'cover' }}
            loading="eager"
            className="rounded-md group-hover:scale-110 transition-transform"
          />
          <div className="cursor-pointer absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md hover:bg-opacity-50 transition duration-300">
            <h2 className="text-white text-3xl font-bold tracking-wide group-hover:tracking-widest transition-all">
              {t(hero.title)}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowcaseImage;
