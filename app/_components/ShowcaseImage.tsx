'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { Hero } from '@/_types/types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

type ShowcaseImageProps = {
  heros: Hero[];
  eager?: boolean;
};

const ShowcaseImage: FC<ShowcaseImageProps> = ({ heros, eager }) => {
  const t = useTranslations();
  const locale = useLocale();

  const sizes = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.3vw';

  return (
    <div
      className={`grid ${
        heros.length >= 3 ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2'
      } gap-12 px-16 pb-16`}
    >
      {heros.map((hero, i) => (
        <Link
          href={`${locale}/${t(hero.slug)}`}
          key={i}
          className={`relative h-64 lg:h-96 shadow-2xl rounded-md group overflow-hidden`}
        >
          <Image
            src={hero.image}
            alt={t(hero.title)}
            fill={true}
            placeholder="blur"
            sizes={sizes}
            style={{ objectFit: 'cover' }}
            loading={eager ? 'eager' : 'lazy'}
            className="rounded-md group-hover:scale-110 transition-transform"
          />
          <div className="cursor-pointer absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-md hover:bg-opacity-30 transition duration-300">
            <h2 className="text-white text-3xl font-medium tracking-wide group-hover:tracking-widest group-hover:text-center transition-all">
              {t(hero.title)}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShowcaseImage;
