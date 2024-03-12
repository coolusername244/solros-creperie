import { FaInstagram } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';

import {
  AboutParagraph,
  ContactMethod,
  Hero,
  MenuItem,
  Navlink,
  OpenTime,
  SocialLink,
} from '@/_types/types';
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

export const openTimes: OpenTime[] = [
  {
    day: 'monday-friday',
    times: '08:00 - 20:00',
  },
  {
    day: 'saturday',
    times: '09:00 - 18:00',
  },
  {
    day: 'sunday',
    times: '10:00 - 17:00',
  },
];

export const contactMethods: ContactMethod[] = [
  {
    method: 'Phone',
    icon: <FiPhone />,
    href: 'tel:+46700415015',
    contact: '+46700415015',
  },
  {
    method: 'Email',
    icon: <TfiEmail />,
    href: 'mailto:info@solroscreperie.se',
    contact: 'info@solroscreperie.se',
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
    title: 'menu.galettes.title',
    slug: 'menu.galettes.slug',
    image: galette1,
  },
  {
    title: 'menu.crepes.title',
    slug: 'menu.crepes.slug',
    image: pancake1,
  },
  {
    title: 'menu.paninis.title',
    slug: 'menu.paninis.slug',
    image: panini1,
  },
  {
    title: 'menu.kids.title',
    slug: 'menu.kids.slug',
    image: panini1,
  },
  {
    title: 'menu.coffee-and-tea.title',
    slug: 'menu.coffee-and-tea.slug',
    image: coffee1,
  },
  {
    title: 'menu.other-drinks.title',
    slug: 'menu.other-drinks.slug',
    image: smoothie1,
  },
];

export const offersHeros: Hero[] = [
  {
    title: 'offers.breakfast',
    image: galette1,
  },
  {
    title: 'offers.lunch',
    image: pancake1,
  },
  {
    title: 'offers.monthly',
    image: panini1,
  },
];

export const newsHeros: Hero[] = [
  {
    title: 'news.offer-1-title',
    image: galette1,
  },
  {
    title: 'news.offer-2-title',
    image: pancake1,
  },
];

export const galetteItems: MenuItem[] = [
  {
    title: 'HamHarmony.title',
    description: 'HamHarmony.description',
    price: 'HamHarmony.price',
  },
  {
    title: 'ChickNCherry.title',
    description: 'ChickNCherry.description',
    price: 'ChickNCherry.price',
  },
  {
    title: 'EggElegy.title',
    description: 'EggElegy.description',
    price: 'EggElegy.price',
  },
  {
    title: 'MozzaMix.title',
    description: 'MozzaMix.description',
    price: 'MozzaMix.price',
  },
  {
    title: 'BrieBravado.title',
    description: 'BrieBravado.description',
    price: 'BrieBravado.price',
  },
  {
    title: 'GuacaGlow.title',
    description: 'GuacaGlow.description',
    price: 'GuacaGlow.price',
  },
  {
    title: 'GreenTango.title',
    description: 'GreenTango.description',
    price: 'GreenTango.price',
  },
  {
    title: 'CheeseFiesta.title',
    description: 'CheeseFiesta.description',
    price: 'CheeseFiesta.price',
  },
  {
    title: 'PearlyBoo.title',
    description: 'PearlyBoo.description',
    price: 'PearlyBoo.price',
  },
];

export const crepeItems: MenuItem[] = [
  {
    title: 'ChocoBana.title',
    description: 'ChocoBana.description',
    price: 'ChocoBana.price',
  },
  {
    title: 'MonLemon.title',
    description: 'MonLemon.description',
    price: 'MonLemon.price',
  },
  {
    title: 'WhiteDelight.title',
    description: 'WhiteDelight.description',
    price: 'WhiteDelight.price',
  },
  {
    title: 'CreamyBerry.title',
    description: 'CreamyBerry.description',
    price: 'CreamyBerry.price',
  },
  {
    title: 'Frutti-di-Keso.title',
    description: 'Frutti-di-Keso.description',
    price: 'Frutti-di-Keso.price',
  },
  {
    title: 'AppleMaple.title',
    description: 'AppleMaple.description',
    price: 'AppleMaple.price',
  },
  {
    title: 'Orange-Bliss.title',
    description: 'Orange-Bliss.description',
    price: 'Orange-Bliss.price',
  },
  {
    title: 'HoneyBana.title',
    description: 'HoneyBana.description',
    price: 'HoneyBana.price',
  },
];

export const toastItems: MenuItem[] = [
  {
    title: 'Ost-and-Skinka.title',
    description: 'Ost-and-Skinka.description',
  },
  {
    title: 'Ost-and-Kyckling.title',
    description: 'Ost-and-Kyckling.description',
  },
  {
    title: 'Mozzarella-and-Pesto.title',
    description: 'Mozzarella-and-Pesto.description',
  },
  {
    title: 'Avokado-and-Pesto.title',
    description: 'Avokado-and-Pesto.description',
  },
];

export const kidsItems: MenuItem[] = [
  {
    title: 'SuperHero.title',
    description: 'SuperHero.description',
    price: 'SuperHero.price',
  },
  {
    title: 'CrepeKid.title',
    description: 'CrepeKid.description',
    price: 'CrepeKid.price',
  },
];

export const coffeeTeaItems: MenuItem[] = [
  {
    title: 'Espresso.title',
    price: 'Espresso.price',
  },
  {
    title: 'Latte.title',
    price: 'Latte.price',
  },
  {
    title: 'Cappuccino.title',
    price: 'Cappuccino.price',
  },
  {
    title: 'Americano.title',
    price: 'Americano.price',
  },
  {
    title: 'Flat-White.title',
    price: 'Flat-White.price',
  },
  {
    title: 'Cortado.title',
    price: 'Cortado.price',
  },
  {
    title: 'Latte-Macchiato.title',
    price: 'Latte-Macchiato.price',
  },
  {
    title: 'Kaffe-Mocca.title',
    price: 'Kaffe-Mocca.price',
  },
  {
    title: 'Bryggkaffe.title',
    price: 'Bryggkaffe.price',
  },
  {
    title: 'Chai-Latte.title',
    price: 'Chai-Latte.price',
  },
  {
    title: 'Dirty-Chai-Latte.title',
    price: 'Dirty-Chai-Latte.price',
  },
  {
    title: 'Varm-Choklad.title',
    price: 'Varm-Choklad.price',
  },
  {
    title: 'Matcha-Latte.title',
    price: 'Matcha-Latte.price',
  },
  {
    title: 'Te.title',
    price: 'Te.price',
  },
];

export const otherItems: MenuItem[] = [
  {
    title: 'smoothies.Kiwi+.title',
    description: 'smoothies.Kiwi+.description',
  },
  {
    title: 'smoothies.Beet+.title',
    description: 'smoothies.Beet+.description',
  },
  {
    title: 'smoothies.Acai+.title',
    description: 'smoothies.Acai+.description',
  },
  {
    title: 'smoothies.Mango+.title',
    description: 'smoothies.Mango+.description',
  },
  {
    title: 'smoothies.Avocado+.title',
    description: 'smoothies.Avocado+.description',
  },
  {
    title: 'smoothies.Broccoli+.title',
    description: 'smoothies.Broccoli+.description',
  },
  {
    title: 'milkshakes.Strawberry.title',
    description: 'milkshakes.Strawberry.description',
    price: 'milkshakes.Strawberry.price',
  },
  {
    title: 'milkshakes.Vanilla.title',
    description: 'milkshakes.Vanilla.description',
    price: 'milkshakes.Vanilla.price',
  },
  {
    title: 'milkshakes.Blueberry.title',
    description: 'milkshakes.Blueberry.description',
    price: 'milkshakes.Blueberry.price',
  },
  {
    title: 'milkshakes.Chocolate.title',
    description: 'milkshakes.Chocolate.description',
    price: 'milkshakes.Chocolate.price',
  },
  {
    title: 'milkshakes.Coffee.title',
    description: 'milkshakes.Coffee.description',
    price: 'milkshakes.Coffee.price',
  },
];
