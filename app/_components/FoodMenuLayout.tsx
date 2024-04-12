import React, { FC } from 'react';
import Image from 'next/image';
import { MenuLayoutProps } from '@/_types/types';
import { getQuery, imageSrc } from '../../helpers';
import { useTranslations } from 'next-intl';

const FoodMenuLayout: FC<MenuLayoutProps> = ({ slug, items }) => {
  let query = getQuery(slug);
  const t = useTranslations(`food.${query}`);

  return (
    <main className="mt-[100px] lg:mt-[130px]">
      {items.map((item, i) => (
        <article key={i} className="py-12 grid md:grid-cols-3">
          <div className="flex flex-col md:text-right md:col-span-2">
            <h2 className="sub-heading border-b border-slate-500 text-right pr-4">
              {t(item.title)} {item.price && <>- {t(item.price)}</>}
            </h2>
            <div className="px-4 xl:px-0 xl:flex xl:flex-col xl:h-full">
              {item.ingredients && (
                <p className="italic py-4 text-right">{t(item.ingredients)}</p>
              )}
              {item.description && (
                <p className="py-4">{t(item.description)}</p>
              )}
              <p className="xl:mt-auto">
                <span className="font-bold">Allergy information</span>:{' '}
                {t(item.allergy)}
              </p>
            </div>
          </div>
          {item.imageLarge && (
            <div className="flex justify-center items-center p-4 xl:p-0">
              <Image
                className="rounded-md"
                src={imageSrc(item)}
                alt={item.title}
                width={300}
                height={450}
              />
            </div>
          )}
        </article>
      ))}
    </main>
  );
};

export default FoodMenuLayout;
