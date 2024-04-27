import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Photo } from 'react-photo-album';

import { MenuLayoutProps } from '@/_types/types';
import { getQuery } from '../../helpers';
import {
  coffeeImages,
  otherDrinkImages,
  coffeeTeaDescription,
  otherDrinkDescription,
} from '@/_assets/datasets/data';
import PhotoCollage from './PhotoCollage';

const DrinkMenuLayout: FC<MenuLayoutProps> = ({ slug, items }) => {
  let query = getQuery(slug);
  const t = useTranslations(`food.${query}`);

  let collageImages: Photo[] = [];
  let description: { text: string }[] = [];

  slug === 'coffee-and-tea'
    ? ((collageImages = coffeeImages), (description = coffeeTeaDescription))
    : ((collageImages = otherDrinkImages),
      (description = otherDrinkDescription));

  return (
    <main className="mt-[100px] lg:mt-[130px] h-fit">
      <section className="py-4 px-6 lg:px-12 text-right text-lg lg:text-xl tracking-wide">
        {description.map((p, i) => (
          <p key={i} className="py-3">
            {t(p.text)}
          </p>
        ))}
      </section>
      <div className="flex">
        <section className="flex flex-col justify-evenly items-end text-right basis-2/3 md:basis-1/3">
          {items.map((item, i) => (
            <div key={i} className="border-b w-full border-slate-500 pr-3">
              <h4 className="text-xl pb-3">
                {t(item.title)} {item.price && <>- {t(item.price)}</>}
              </h4>
              {item.ingredients && (
                <p className="italic text-right pb-3">{t(item.ingredients)}</p>
              )}
            </div>
          ))}
        </section>
        <section className="basis-1/3 md:basis-2/3">
          <PhotoCollage collageImages={collageImages} />
        </section>
      </div>
    </main>
  );
};

export default DrinkMenuLayout;
