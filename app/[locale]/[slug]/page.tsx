'use client';
import React from 'react';

import { getItems, getQuery } from '../../../helpers';
import FoodMenuLayout from '@/_components/FoodMenuLayout';
import DrinkMenuLayout from '@/_components/DrinkMenuLayout';

const MenuCategoryItems = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const items = getItems(slug);
  const query = getQuery(slug);

  let foodOrDrink;

  if (query === 'coffee-and-tea') {
    foodOrDrink = 'drink';
  } else if (query === 'other-drinks') {
    foodOrDrink = 'drink';
  } else {
    foodOrDrink = 'food';
  }

  return foodOrDrink === 'food' ? (
    <FoodMenuLayout slug={slug} items={items} />
  ) : (
    <DrinkMenuLayout slug={slug} items={items} />
  );
};

export default MenuCategoryItems;
