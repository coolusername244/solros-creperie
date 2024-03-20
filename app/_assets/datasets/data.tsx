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

import hamHarmonyLarge from '@/_assets/images/food/galettes/large/hamHarmony.jpg';
import guacaGlowLarge from '@/_assets/images/food/galettes/large/guacaGlow.jpg';
import greenTangoLarge from '@/_assets/images/food/galettes/large/greenTango.jpg';
import brieBravadoLarge from '@/_assets/images/food/galettes/large/brieBravado.jpg';
import chickNCherryLarge from '@/_assets/images/food/galettes/large/chickNCherry.jpg';
import cheeseFiestaLarge from '@/_assets/images/food/galettes/large/cheeseFiesta.jpg';
import mozzaMixLarge from '@/_assets/images/food/galettes/large/mozzaMix.jpg';
import eggElegyLarge from '@/_assets/images/food/galettes/large/eggElegy.jpg';
import pearlyBooLarge from '@/_assets/images/food/galettes/large/pearlyBoo.jpg';

import hamHarmonySmall from '@/_assets/images/food/galettes/small/hamHarmony.jpg';
import guacaGlowSmall from '@/_assets/images/food/galettes/small/guacaGlow.jpg';
import greenTangoSmall from '@/_assets/images/food/galettes/small/greenTango.jpg';
import brieBravadoSmall from '@/_assets/images/food/galettes/small/brieBravado.jpg';
import chickNCherrySmall from '@/_assets/images/food/galettes/small/chickNCherry.jpg';
import cheeseFiestaSmall from '@/_assets/images/food/galettes/small/cheeseFiesta.jpg';
import mozzaMixSmall from '@/_assets/images/food/galettes/small/mozzaMix.jpg';
import eggElegySmall from '@/_assets/images/food/galettes/small/eggElegy.jpg';
import pearlyBooSmall from '@/_assets/images/food/galettes/small/pearlyBoo.jpg';

import chocoBanaLarge from '@/_assets/images/food/crepes/large/chocoBana.jpg';
import monLemonLarge from '@/_assets/images/food/crepes/large/monLemon.jpg';
import whiteDelightLarge from '@/_assets/images/food/crepes/large/whiteDelight.jpg';
import fruttiDiKesoLarge from '@/_assets/images/food/crepes/large/fruttiDiKeso.jpg';
import creamyBerryLarge from '@/_assets/images/food/crepes/large/creamyBerry.jpg';
import appleMapleLarge from '@/_assets/images/food/crepes/large/appleMaple.jpg';
import orangeBlissLarge from '@/_assets/images/food/crepes/large/orangeBliss.jpg';
import honeyBanaLarge from '@/_assets/images/food/crepes/large/honeyBana.jpg';

import chocoBanaSmall from '@/_assets/images/food/crepes/small/chocoBana.jpg';
import monLemonSmall from '@/_assets/images/food/crepes/small/monLemon.jpg';
import whiteDelightSmall from '@/_assets/images/food/crepes/small/whiteDelight.jpg';
import fruttiDiKesoSmall from '@/_assets/images/food/crepes/small/fruttiDiKeso.jpg';
import creamyBerrySmall from '@/_assets/images/food/crepes/small/creamyBerry.jpg';
import appleMapleSmall from '@/_assets/images/food/crepes/small/appleMaple.jpg';
import orangeBlissSmall from '@/_assets/images/food/crepes/small/orangeBliss.jpg';
import honeyBanaSmall from '@/_assets/images/food/crepes/small/honeyBana.jpg';

import cheeseAndHamLarge from '@/_assets/images/food/paninis/large/cheeseAndHam.jpg';
import mozzarellaAndPestoLarge from '@/_assets/images/food/paninis/large/mozzarellaAndPesto.jpg';
import cheeseAndChickenLarge from '@/_assets/images/food/paninis/large/cheeseAndChicken.jpg';
import avocadoAndPestoLarge from '@/_assets/images/food/paninis/large/avocadoAndPesto.jpg';

import cheeseAndHamSmall from '@/_assets/images/food/paninis/small/cheeseAndHam.jpg';
import mozzarellaAndPestoSmall from '@/_assets/images/food/paninis/small/mozzarellaAndPesto.jpg';
import cheeseAndChickenSmall from '@/_assets/images/food/paninis/small/cheeseAndChicken.jpg';
import avocadoAndPestoSmall from '@/_assets/images/food/paninis/small/avocadoAndPesto.jpg';

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
    image: hamHarmonyLarge,
  },
  {
    title: 'menu.crepes.title',
    slug: 'menu.crepes.slug',
    image: chocoBanaLarge,
  },
  {
    title: 'menu.paninis.title',
    slug: 'menu.paninis.slug',
    image: cheeseAndHamLarge,
  },
  {
    title: 'menu.kids.title',
    slug: 'menu.kids.slug',
    image: cheeseAndHamLarge,
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
    image: hamHarmonyLarge,
  },
  {
    title: 'offers.lunch',
    image: chocoBanaLarge,
  },
  {
    title: 'offers.monthly',
    image: cheeseAndHamLarge,
  },
];

export const newsHeros: Hero[] = [
  {
    title: 'news.offer-1-title',
    image: hamHarmonyLarge,
  },
  {
    title: 'news.offer-2-title',
    image: chocoBanaLarge,
  },
];

export const galetteItems: MenuItem[] = [
  {
    title: 'hamHarmony.title',
    description: 'hamHarmony.description',
    price: 'hamHarmony.price',
    imageLarge: hamHarmonyLarge,
    imageSmall: hamHarmonySmall,
  },
  {
    title: 'chickNCherry.title',
    description: 'chickNCherry.description',
    price: 'chickNCherry.price',
    imageLarge: chickNCherryLarge,
    imageSmall: chickNCherrySmall,
  },
  {
    title: 'eggElegy.title',
    description: 'eggElegy.description',
    price: 'eggElegy.price',
    imageLarge: eggElegyLarge,
    imageSmall: eggElegySmall,
  },
  {
    title: 'mozzaMix.title',
    description: 'mozzaMix.description',
    price: 'mozzaMix.price',
    imageLarge: mozzaMixLarge,
    imageSmall: mozzaMixSmall,
  },
  {
    title: 'brieBravado.title',
    description: 'brieBravado.description',
    price: 'brieBravado.price',
    imageLarge: brieBravadoLarge,
    imageSmall: brieBravadoSmall,
  },
  {
    title: 'guacaGlow.title',
    description: 'guacaGlow.description',
    price: 'guacaGlow.price',
    imageLarge: guacaGlowLarge,
    imageSmall: guacaGlowSmall,
  },
  {
    title: 'greenTango.title',
    description: 'greenTango.description',
    price: 'greenTango.price',
    imageLarge: greenTangoLarge,
    imageSmall: greenTangoSmall,
  },
  {
    title: 'cheeseFiesta.title',
    description: 'cheeseFiesta.description',
    price: 'cheeseFiesta.price',
    imageLarge: cheeseFiestaLarge,
    imageSmall: cheeseFiestaSmall,
  },
  {
    title: 'pearlyBoo.title',
    description: 'pearlyBoo.description',
    price: 'pearlyBoo.price',
    imageLarge: pearlyBooLarge,
    imageSmall: pearlyBooSmall,
  },
];

export const crepeItems: MenuItem[] = [
  {
    title: 'chocoBana.title',
    description: 'chocoBana.description',
    price: 'chocoBana.price',
    imageLarge: chocoBanaLarge,
    imageSmall: chocoBanaSmall,
  },
  {
    title: 'monLemon.title',
    description: 'monLemon.description',
    price: 'monLemon.price',
    imageLarge: monLemonLarge,
    imageSmall: monLemonSmall,
  },
  {
    title: 'whiteDelight.title',
    description: 'whiteDelight.description',
    price: 'whiteDelight.price',
    imageLarge: whiteDelightLarge,
    imageSmall: whiteDelightSmall,
  },
  {
    title: 'creamyBerry.title',
    description: 'creamyBerry.description',
    price: 'creamyBerry.price',
    imageLarge: creamyBerryLarge,
    imageSmall: creamyBerrySmall,
  },
  {
    title: 'fruttiDiKeso.title',
    description: 'fruttiDiKeso.description',
    price: 'fruttiDiKeso.price',
    imageLarge: fruttiDiKesoLarge,
    imageSmall: fruttiDiKesoSmall,
  },
  {
    title: 'appleMaple.title',
    description: 'appleMaple.description',
    price: 'appleMaple.price',
    imageLarge: appleMapleLarge,
    imageSmall: appleMapleSmall,
  },
  {
    title: 'orangeBliss.title',
    description: 'orangeBliss.description',
    price: 'orangeBliss.price',
    imageLarge: orangeBlissLarge,
    imageSmall: orangeBlissSmall,
  },
  {
    title: 'honeyBana.title',
    description: 'honeyBana.description',
    price: 'honeyBana.price',
    imageLarge: honeyBanaLarge,
    imageSmall: honeyBanaSmall,
  },
];

export const toastItems: MenuItem[] = [
  {
    title: 'cheeseAndHam.title',
    description: 'cheeseAndHam.description',
    imageLarge: cheeseAndHamLarge,
    imageSmall: cheeseAndHamSmall,
  },
  {
    title: 'cheeseAndChicken.title',
    description: 'cheeseAndChicken.description',
    imageLarge: cheeseAndChickenLarge,
    imageSmall: cheeseAndChickenSmall,
  },
  {
    title: 'mozzarellaAndPesto.title',
    description: 'mozzarellaAndPesto.description',
    imageLarge: mozzarellaAndPestoLarge,
    imageSmall: mozzarellaAndPestoSmall,
  },
  {
    title: 'avocadoAndPesto.title',
    description: 'avocadoAndPesto.description',
    imageLarge: avocadoAndPestoLarge,
    imageSmall: avocadoAndPestoSmall,
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
    imageLarge: strawberry,
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
    imageLarge: blueberry,
  },
  {
    title: 'milkshakes.chocolate.title',
    description: 'milkshakes.chocolate.description',
    price: 'milkshakes.chocolate.price',
    imageLarge: chocolate,
  },
  {
    title: 'milkshakes.coffee.title',
    description: 'milkshakes.coffee.description',
    price: 'milkshakes.coffee.price',
    imageLarge: coffee,
  },
];
