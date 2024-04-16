import {
  galetteItems,
  crepeItems,
  toastItems,
  kidsItems,
  coffeeTeaItems,
  otherItems,
} from '@/_assets/datasets/data';
import { MenuItem } from '@/_types/types';
import { useEffect, useState } from 'react';

export const handleClick = (name: string) => {
  const element = document.getElementById(name);
  // small device navbar height
  let navbarHeight = 100;

  if (window.innerWidth >= 1024) {
    // large device navbar height
    navbarHeight = 130;
  }

  if (element) {
    const offset = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offset - navbarHeight,
      behavior: 'smooth',
    });
  }
};

export const decodeSlug = (slug: string): string => {
  return decodeURIComponent(slug);
};

export const getQuery = (slug: string) => {
  let query = slug;

  if (slug === 'galetter' || slug === 'галети') {
    query = 'galettes';
  }
  if (slug === 'sota-crepes' || slug === 'солодкий-млинці') {
    query = 'sweet-crepes';
  }
  if (slug === 'toasts-och-paninis' || slug === 'тости-та-паніні') {
    query = 'toasts-and-paninis';
  }
  if (slug === 'barn-meny' || slug === 'дитяче-меню') {
    query = 'kids-menu';
  }
  if (slug === 'kaffe-och-te' || slug === 'кава-та-чай') {
    query = 'coffee-and-tea';
  }
  if (slug === 'ovriga-drycker' || slug === 'інші-напої') {
    query = 'other-drinks';
  }

  return query;
};

export const getItems = (slug: string) => {
  let items: MenuItem[] = [];

  switch (slug) {
    case 'galetter':
    case 'galettes':
    case 'галети':
      items = galetteItems;
      break;
    case 'sota-crepes':
    case 'sweet-crepes':
    case 'солодкий-млинці':
      items = crepeItems;
      break;
    case 'toasts-och-paninis':
    case 'toasts-and-paninis':
    case 'тости-та-паніні':
      items = toastItems;
      break;
    case 'barn-meny':
    case 'kids-menu':
    case 'дитяче-меню':
      items = kidsItems;
      break;
    case 'kaffe-och-te':
    case 'coffee-and-tea':
    case 'кава-та-чай':
      items = coffeeTeaItems;
      break;
    case 'ovriga-drycker':
    case 'other-drinks':
    case 'інші-напої':
      items = otherItems;
      break;
  }

  return items;
};

export const imageSrc = (item: MenuItem) => {
  if (window.innerWidth < 768) {
    if (item.imageSmall) return item.imageSmall.src;
  }
  return item.imageLarge!.src;
};

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowWidth;
};
