import { AboutParagraph, Hero, Navlink, SocialLink } from '@/_types/types';
import { FaInstagram } from 'react-icons/fa';
import smoothie1 from '@/_assets/images/drinks/smoothies/smoothie-1.jpg';
import galette1 from '@/_assets/images/food/galettes/galette-1.jpg';
import pancake1 from '@/_assets/images/food/pancakes/pancake-1.jpg';
import panini1 from '@/_assets/images/food/paninis/panini-1.jpg';
import coffee1 from '@/_assets/images/drinks/coffee/coffee-4.jpg';

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/solroscreperie',
  },
];

export const navlinks: Navlink[] = [
  {
    name: 'menu',
  },
  {
    name: 'offers',
  },
  {
    name: 'news',
  },
  {
    name: 'about',
  },
  {
    name: 'contact',
  },
];

export const about: AboutParagraph[] = [
  {
    text: 'p1',
  },
  {
    text: 'p2',
  },
  {
    text: 'p3',
  },
  {
    text: 'p4',
  },
  {
    text: 'p5',
  },
  {
    text: 'p6',
  },
  {
    text: 'p7',
  },
  {
    text: 'p8',
  },
];

export const menuHeros: Hero[] = [
  {
    title: 'menu.galettes',
    image: galette1,
  },
  {
    title: 'menu.crepes',
    image: pancake1,
  },
  {
    title: 'menu.paninis',
    image: panini1,
  },
  {
    title: 'menu.kids',
    image: panini1,
  },
  {
    title: 'menu.coffee-and-tea',
    image: coffee1,
  },
  {
    title: 'menu.other-drinks',
    image: smoothie1,
  },
];

export const offersHeros: Hero[] = [
  {
    title: 'menu.galettes',
    image: galette1,
  },
  {
    title: 'menu.crepes',
    image: pancake1,
  },
  {
    title: 'menu.paninis',
    image: panini1,
  },
];

export const newsHeros: Hero[] = [
  {
    title: 'menu.galettes',
    image: galette1,
  },
  {
    title: 'menu.crepes',
    image: pancake1,
  },
];
