'use client';
import React from 'react';

import { getItems, getQuery, decodeSlug } from '../../../helpers';
import FoodMenuLayout from '@/_components/FoodMenuLayout';
import DrinkMenuLayout from '@/_components/DrinkMenuLayout';

const MenuCategoryItems = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const decodedSlug = decodeSlug(slug);

  const items = getItems(decodedSlug);
  const query = getQuery(decodedSlug);

  let foodOrDrink;

  if (query === 'coffee-and-tea') {
    foodOrDrink = 'drink';
  } else if (query === 'other-drinks') {
    foodOrDrink = 'drink';
  } else {
    foodOrDrink = 'food';
  }

  return foodOrDrink === 'food' ? (
    <FoodMenuLayout slug={query} items={items} />
  ) : (
    <DrinkMenuLayout slug={query} items={items} />
  );
};

export default MenuCategoryItems;
