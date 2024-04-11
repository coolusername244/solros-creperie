import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import PhotoAlbum, { Photo } from 'react-photo-album';

import { MenuLayoutProps } from '@/_types/types';
import { getQuery } from '../../helpers';
import {
  coffeeImages,
  otherDrinkImages,
  coffeeTeaDescription,
  otherDrinkDescription,
} from '@/_assets/datasets/data';

const DrinkMenuLayout: FC<MenuLayoutProps> = ({ slug, items }) => {
  let query = getQuery(slug);
  const t = useTranslations(`food.${query}`);

  let collageImages: Photo[] = [];
  let description: { text: string }[] = [];

  slug === 'coffee-and-tea'
    ? ((collageImages = coffeeImages), (description = coffeeTeaDescription))
    : ((collageImages = otherDrinkImages),
      (description = otherDrinkDescription));

  console.log('description', description);
  return (
    <main className="mt-[100px] lg:mt-[130px] flex h-fit">
      <section className="w-full">
        {description.map((p, i) => (
          <p key={i} className="px-4 py-2">
            {t(p.text)}
          </p>
        ))}
      </section>
      <section className="flex flex-col justify-evenly items-end text-right basis-1/3">
        {items.map((item, i) => (
          <div key={i} className="border-b w-full border-slate-500 mr-6">
            <h4 className="text-xl">
              {t(item.title)} {item.price && <>- {t(item.price)}</>}
            </h4>
            {item.ingredients && (
              <p className="italic py-4 text-right">{t(item.ingredients)}</p>
            )}
          </div>
        ))}
      </section>
      <section className="basis-2/3">
        <PhotoAlbum
          layout="columns"
          columns={3}
          photos={collageImages}
          spacing={2}
          padding={5}
        />
      </section>
    </main>
  );
};

export default DrinkMenuLayout;
