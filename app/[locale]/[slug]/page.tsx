import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import {
  galetteItems,
  crepeItems,
  toastItems,
  kidsItems,
  coffeeTeaItems,
  otherItems,
} from '@/_assets/datasets/data';
import { MenuItem } from '@/_types/types';

const MenuCategoryItems = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  let query = slug;

  if (slug === 'galetter') {
    query = 'galettes';
  }
  if (slug === 'sota-crepes') {
    query = 'sweet-crepes';
  }
  if (slug === 'toasts-och-paninis') {
    query = 'toasts-and-paninis';
  }
  if (slug === 'barn-meny') {
    query = 'kids-menu';
  }
  if (slug === 'kaffe-och-te') {
    query = 'coffee-and-tea';
  }
  if (slug === 'ovriga-drycker') {
    query = 'other-drinks';
  }

  const t = useTranslations(`food.${query}`);

  let items: MenuItem[] = [];

  switch (slug) {
    case 'galetter':
    case 'galettes':
      items = galetteItems;
      break;
    case 'sota-crepes':
    case 'sweet-crepes':
      items = crepeItems;
      break;
    case 'toasts-och-paninis':
    case 'toasts-and-paninis':
      items = toastItems;
      break;
    case 'barn-meny':
    case 'kids-menu':
      items = kidsItems;
      break;
    case 'kaffe-och-te':
    case 'coffee-and-tea':
      items = coffeeTeaItems;
      break;
    case 'ovriga-drycker':
    case 'other-drinks':
      items = otherItems;
      break;
  }

  return (
    <main className="mt-[100px] lg:mt-[130px]">
      {items.map((item, i) => (
        <>
          <p key={i}>{t(item.title)}</p>
          {item.description && <p>{t(item.description)}</p>}
          {item.price && <p>{t(item.price)}</p>}
          {item.image && (
            <Image
              src={item.image.src}
              alt={item.title}
              width={100}
              height={100}
            />
          )}
        </>
      ))}
    </main>
  );
};

export default MenuCategoryItems;
