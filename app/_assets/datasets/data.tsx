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

import hamHarmony from '@/_assets/images/food/galettes/hamHarmony.jpg';
import guacaGlow from '@/_assets/images/food/galettes/guacaGlow.jpg';
import greenTango from '@/_assets/images/food/galettes/greenTango.jpg';
import brieBravado from '@/_assets/images/food/galettes/brieBravado.jpg';
import chickNCherry from '@/_assets/images/food/galettes/chickNCherry.jpg';
import cheeseFiesta from '@/_assets/images/food/galettes/cheeseFiesta.jpg';
import mozzaMix from '@/_assets/images/food/galettes/mozzaMix.jpg';
import eggElegy from '@/_assets/images/food/galettes/eggElegy.jpg';
import pearlyBoo from '@/_assets/images/food/galettes/pearlyBoo.jpg';

import chocoBana from '@/_assets/images/food/crepes/chocoBana.jpg';
import monLemon from '@/_assets/images/food/crepes/monLemon.jpg';
import whiteDelight from '@/_assets/images/food/crepes/whiteDelight.jpg';
import fruttiDiKeso from '@/_assets/images/food/crepes/fruttiDiKeso.jpg';
import creamyBerry from '@/_assets/images/food/crepes/creamyBerry.jpg';
import appleMaple from '@/_assets/images/food/crepes/appleMaple.jpg';
import orangeBliss from '@/_assets/images/food/crepes/orangeBliss.jpg';
import honeyBana from '@/_assets/images/food/crepes/honeyBana.jpg';

import cheeseAndHam from '@/_assets/images/food/paninis/cheeseAndHam.jpg';
import mozzarellaAndPesto from '@/_assets/images/food/paninis/mozzarellaAndPesto.jpg';
import cheeseAndChicken from '@/_assets/images/food/paninis/cheeseAndChicken.jpg';
import avocadoAndPesto from '@/_assets/images/food/paninis/avocadoAndPesto.jpg';

import smoothie1 from '@/_assets/images/drinks/smoothies/smoothie-1.jpg';

import strawberry from '@/_assets/images/drinks/milkshakes/strawberry.jpg';
import chocolate from '@/_assets/images/drinks/milkshakes/chocolate.jpg';
import coffee from '@/_assets/images/drinks/milkshakes/coffee.jpg';
import blueberry from '@/_assets/images/drinks/milkshakes/blueberry.jpg';

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
    image: hamHarmony,
  },
  {
    title: 'menu.crepes.title',
    slug: 'menu.crepes.slug',
    image: chocoBana,
  },
  {
    title: 'menu.paninis.title',
    slug: 'menu.paninis.slug',
    image: cheeseAndHam,
  },
  {
    title: 'menu.kids.title',
    slug: 'menu.kids.slug',
    image: cheeseAndHam,
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
    image: hamHarmony,
  },
  {
    title: 'offers.lunch',
    image: chocoBana,
  },
  {
    title: 'offers.monthly',
    image: cheeseAndHam,
  },
];

export const newsHeros: Hero[] = [
  {
    title: 'news.offer-1-title',
    image: hamHarmony,
  },
  {
    title: 'news.offer-2-title',
    image: chocoBana,
  },
];

export const galetteItems: MenuItem[] = [
  {
    title: 'hamHarmony.title',
    description: 'hamHarmony.description',
    price: 'hamHarmony.price',
    image: hamHarmony,
  },
  {
    title: 'chickNCherry.title',
    description: 'chickNCherry.description',
    price: 'chickNCherry.price',
    image: chickNCherry,
  },
  {
    title: 'eggElegy.title',
    description: 'eggElegy.description',
    price: 'eggElegy.price',
    image: eggElegy,
  },
  {
    title: 'mozzaMix.title',
    description: 'mozzaMix.description',
    price: 'mozzaMix.price',
    image: mozzaMix,
  },
  {
    title: 'brieBravado.title',
    description: 'brieBravado.description',
    price: 'brieBravado.price',
    image: brieBravado,
  },
  {
    title: 'guacaGlow.title',
    description: 'guacaGlow.description',
    price: 'guacaGlow.price',
    image: guacaGlow,
  },
  {
    title: 'greenTango.title',
    description: 'greenTango.description',
    price: 'greenTango.price',
    image: greenTango,
  },
  {
    title: 'cheeseFiesta.title',
    description: 'cheeseFiesta.description',
    price: 'cheeseFiesta.price',
    image: cheeseFiesta,
  },
  {
    title: 'pearlyBoo.title',
    description: 'pearlyBoo.description',
    price: 'pearlyBoo.price',
    image: pearlyBoo,
  },
];

export const crepeItems: MenuItem[] = [
  {
    title: 'chocoBana.title',
    description: 'chocoBana.description',
    price: 'chocoBana.price',
    image: chocoBana,
  },
  {
    title: 'monLemon.title',
    description: 'monLemon.description',
    price: 'monLemon.price',
    image: monLemon,
  },
  {
    title: 'whiteDelight.title',
    description: 'whiteDelight.description',
    price: 'whiteDelight.price',
    image: whiteDelight,
  },
  {
    title: 'creamyBerry.title',
    description: 'creamyBerry.description',
    price: 'creamyBerry.price',
    image: creamyBerry,
  },
  {
    title: 'fruttiDiKeso.title',
    description: 'fruttiDiKeso.description',
    price: 'fruttiDiKeso.price',
    image: fruttiDiKeso,
  },
  {
    title: 'appleMaple.title',
    description: 'appleMaple.description',
    price: 'appleMaple.price',
    image: appleMaple,
  },
  {
    title: 'orangeBliss.title',
    description: 'orangeBliss.description',
    price: 'orangeBliss.price',
    image: orangeBliss,
  },
  {
    title: 'honeyBana.title',
    description: 'honeyBana.description',
    price: 'honeyBana.price',
    image: honeyBana,
  },
];

export const toastItems: MenuItem[] = [
  {
    title: 'cheeseAndHam.title',
    description: 'cheeseAndHam.description',
    image: cheeseAndHam,
  },
  {
    title: 'cheeseAndChicken.title',
    description: 'cheeseAndChicken.description',
    image: cheeseAndChicken,
  },
  {
    title: 'mozzarellaAndPesto.title',
    description: 'mozzarellaAndPesto.description',
    image: mozzarellaAndPesto,
  },
  {
    title: 'avocadoAndPesto.title',
    description: 'avocadoAndPesto.description',
    image: avocadoAndPesto,
  },
];

export const kidsItems: MenuItem[] = [
  {
    title: 'superHero.title',
    description: 'superHero.description',
    price: 'superHero.price',
  },
  {
    title: 'crepeKid.title',
    description: 'crepeKid.description',
    price: 'crepeKid.price',
  },
];

export const coffeeTeaItems: MenuItem[] = [
  {
    title: 'espresso.title',
    price: 'espresso.price',
  },
  {
    title: 'latte.title',
    price: 'latte.price',
  },
  {
    title: 'cappuccino.title',
    price: 'cappuccino.price',
  },
  {
    title: 'americano.title',
    price: 'americano.price',
  },
  {
    title: 'flatWhite.title',
    price: 'flatWhite.price',
  },
  {
    title: 'cortado.title',
    price: 'cortado.price',
  },
  {
    title: 'latteMacchiato.title',
    price: 'latteMacchiato.price',
  },
  {
    title: 'kaffeMocca.title',
    price: 'kaffeMocca.price',
  },
  {
    title: 'filterCoffee.title',
    price: 'filterCoffee.price',
  },
  {
    title: 'chaiLatte.title',
    price: 'chaiLatte.price',
  },
  {
    title: 'dirtyChaiLatte.title',
    price: 'dirtyChaiLatte.price',
  },
  {
    title: 'hotChocolate.title',
    price: 'hotChocolate.price',
  },
  {
    title: 'matchaLatte.title',
    price: 'matchaLatte.price',
  },
  {
    title: 'tea.title',
    price: 'tea.price',
  },
];

export const otherItems: MenuItem[] = [
  {
    title: 'smoothies.kiwi.title',
    description: 'smoothies.kiwi.description',
  },
  {
    title: 'smoothies.beet.title',
    description: 'smoothies.beet.description',
  },
  {
    title: 'smoothies.acai.title',
    description: 'smoothies.acai.description',
  },
  {
    title: 'smoothies.mango.title',
    description: 'smoothies.mango.description',
  },
  {
    title: 'smoothies.avocado.title',
    description: 'smoothies.avocado.description',
  },
  {
    title: 'smoothies.broccoli.title',
    description: 'smoothies.broccoli.description',
  },
  {
    title: 'milkshakes.strawberry.title',
    description: 'milkshakes.strawberry.description',
    price: 'milkshakes.strawberry.price',
    image: strawberry,
  },
  {
    title: 'milkshakes.vanilla.title',
    description: 'milkshakes.vanilla.description',
    price: 'milkshakes.vanilla.price',
  },
  {
    title: 'milkshakes.blueberry.title',
    description: 'milkshakes.blueberry.description',
    price: 'milkshakes.blueberry.price',
    image: blueberry,
  },
  {
    title: 'milkshakes.chocolate.title',
    description: 'milkshakes.chocolate.description',
    price: 'milkshakes.chocolate.price',
    image: chocolate,
  },
  {
    title: 'milkshakes.coffee.title',
    description: 'milkshakes.coffee.description',
    price: 'milkshakes.coffee.price',
    image: coffee,
  },
];
