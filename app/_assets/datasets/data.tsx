import { FaInstagram } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { Photo } from 'react-photo-album';

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
import smoothie2 from '@/_assets/images/drinks/smoothies/smoothie-2.jpg';
import smoothie3 from '@/_assets/images/drinks/smoothies/smoothie-3.jpg';
import smoothie4 from '@/_assets/images/drinks/smoothies/smoothie-4.jpg';
import smoothie5 from '@/_assets/images/drinks/smoothies/smoothie-5.jpg';

import strawberry from '@/_assets/images/drinks/milkshakes/strawberry.jpg';
import chocolate from '@/_assets/images/drinks/milkshakes/chocolate.jpg';
import coffee from '@/_assets/images/drinks/milkshakes/coffee.jpg';
import blueberry from '@/_assets/images/drinks/milkshakes/blueberry.jpg';

import coffee1 from '@/_assets/images/drinks/coffee/coffee-1.jpg';
import coffee2 from '@/_assets/images/drinks/coffee/coffee-2.jpg';
import coffee3 from '@/_assets/images/drinks/coffee/coffee-3.jpg';
import coffee4 from '@/_assets/images/drinks/coffee/coffee-4.jpg';
import coffee5 from '@/_assets/images/drinks/coffee/coffee-5.jpg';
import coffee6 from '@/_assets/images/drinks/coffee/coffee-6.jpg';
import coffee7 from '@/_assets/images/drinks/coffee/coffee-7.jpg';
import coffee8 from '@/_assets/images/drinks/coffee/coffee-8.jpg';

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
    name: 'new',
  },
  {
    name: 'about',
  },
  {
    name: 'contact',
  },
  {
    name: 'order',
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
    title: 'offers.breakfast.title',
    slug: 'offers.breakfast.slug',
    image: hamHarmonyLarge,
  },
  {
    title: 'offers.lunch.title',
    slug: 'offers.lunch.slug',
    image: chocoBanaLarge,
  },
  {
    title: 'offers.monthly.title',
    slug: 'offers.monthly.slug',
    image: cheeseAndHamLarge,
  },
];

export const newHeros: Hero[] = [
  {
    title: 'new.offer-1.title',
    slug: 'new.offer-1.slug',
    image: hamHarmonyLarge,
  },
  {
    title: 'new.offer-2.title',
    slug: 'new.offer-2.slug',
    image: chocoBanaLarge,
  },
];

export const galetteItems: MenuItem[] = [
  {
    title: 'hamHarmony.title',
    ingredients: 'hamHarmony.ingredients',
    description: 'hamHarmony.description',
    price: 'hamHarmony.price',
    allergy: 'hamHarmony.allergy',
    imageLarge: hamHarmonyLarge,
    imageSmall: hamHarmonySmall,
  },
  {
    title: 'chickNCherry.title',
    ingredients: 'chickNCherry.ingredients',
    description: 'chickNCherry.description',
    price: 'chickNCherry.price',
    allergy: 'chickNCherry.allergy',
    imageLarge: chickNCherryLarge,
    imageSmall: chickNCherrySmall,
  },
  {
    title: 'eggElegy.title',
    ingredients: 'eggElegy.ingredients',
    description: 'eggElegy.description',
    price: 'eggElegy.price',
    allergy: 'eggElegy.allergy',
    imageLarge: eggElegyLarge,
    imageSmall: eggElegySmall,
  },
  {
    title: 'mozzaMix.title',
    ingredients: 'mozzaMix.ingredients',
    description: 'mozzaMix.description',
    price: 'mozzaMix.price',
    allergy: 'mozzaMix.allergy',
    imageLarge: mozzaMixLarge,
    imageSmall: mozzaMixSmall,
  },
  {
    title: 'brieBravado.title',
    ingredients: 'brieBravado.ingredients',
    description: 'brieBravado.description',
    price: 'brieBravado.price',
    allergy: 'brieBravado.allergy',
    imageLarge: brieBravadoLarge,
    imageSmall: brieBravadoSmall,
  },
  {
    title: 'guacaGlow.title',
    ingredients: 'guacaGlow.ingredients',
    description: 'guacaGlow.description',
    price: 'guacaGlow.price',
    allergy: 'guacaGlow.allergy',
    imageLarge: guacaGlowLarge,
    imageSmall: guacaGlowSmall,
  },
  {
    title: 'greenTango.title',
    ingredients: 'greenTango.ingredients',
    description: 'greenTango.description',
    price: 'greenTango.price',
    allergy: 'greenTango.allergy',
    imageLarge: greenTangoLarge,
    imageSmall: greenTangoSmall,
  },
  {
    title: 'cheeseFiesta.title',
    ingredients: 'cheeseFiesta.ingredients',
    description: 'cheeseFiesta.description',
    price: 'cheeseFiesta.price',
    allergy: 'cheeseFiesta.allergy',
    imageLarge: cheeseFiestaLarge,
    imageSmall: cheeseFiestaSmall,
  },
  {
    title: 'pearlyBoo.title',
    ingredients: 'pearlyBoo.ingredients',
    description: 'pearlyBoo.description',
    price: 'pearlyBoo.price',
    allergy: 'pearlyBoo.allergy',
    imageLarge: pearlyBooLarge,
    imageSmall: pearlyBooSmall,
  },
];

export const crepeItems: MenuItem[] = [
  {
    title: 'chocoBana.title',
    ingredients: 'chocoBana.ingredients',
    description: 'chocoBana.description',
    price: 'chocoBana.price',
    allergy: 'chocoBana.allergy',
    imageLarge: chocoBanaLarge,
    imageSmall: chocoBanaSmall,
  },
  {
    title: 'monLemon.title',
    ingredients: 'monLemon.ingredients',
    description: 'monLemon.description',
    price: 'monLemon.price',
    allergy: 'monLemon.allergy',
    imageLarge: monLemonLarge,
    imageSmall: monLemonSmall,
  },
  {
    title: 'whiteDelight.title',
    ingredients: 'whiteDelight.ingredients',
    description: 'whiteDelight.description',
    price: 'whiteDelight.price',
    allergy: 'whiteDelight.allergy',
    imageLarge: whiteDelightLarge,
    imageSmall: whiteDelightSmall,
  },
  {
    title: 'creamyBerry.title',
    ingredients: 'creamyBerry.ingredients',
    description: 'creamyBerry.description',
    price: 'creamyBerry.price',
    allergy: 'creamyBerry.allergy',
    imageLarge: creamyBerryLarge,
    imageSmall: creamyBerrySmall,
  },
  {
    title: 'fruttiDiKeso.title',
    ingredients: 'fruttiDiKeso.ingredients',
    description: 'fruttiDiKeso.description',
    price: 'fruttiDiKeso.price',
    allergy: 'fruttiDiKeso.allergy',
    imageLarge: fruttiDiKesoLarge,
    imageSmall: fruttiDiKesoSmall,
  },
  {
    title: 'appleMaple.title',
    ingredients: 'appleMaple.ingredients',
    description: 'appleMaple.description',
    price: 'appleMaple.price',
    allergy: 'appleMaple.allergy',
    imageLarge: appleMapleLarge,
    imageSmall: appleMapleSmall,
  },
  {
    title: 'orangeBliss.title',
    ingredients: 'orangeBliss.ingredients',
    description: 'orangeBliss.description',
    price: 'orangeBliss.price',
    allergy: 'orangeBliss.allergy',
    imageLarge: orangeBlissLarge,
    imageSmall: orangeBlissSmall,
  },
  {
    title: 'honeyBana.title',
    ingredients: 'honeyBana.ingredients',
    description: 'honeyBana.description',
    price: 'honeyBana.price',
    allergy: 'honeyBana.allergy',
    imageLarge: honeyBanaLarge,
    imageSmall: honeyBanaSmall,
  },
];

export const toastItems: MenuItem[] = [
  {
    title: 'cheeseAndHam.title',
    ingredients: 'cheeseAndHam.ingredients',
    description: 'cheeseAndHam.description',
    allergy: 'cheeseAndHam.allergy',
    imageLarge: cheeseAndHamLarge,
    imageSmall: cheeseAndHamSmall,
  },
  {
    title: 'cheeseAndChicken.title',
    ingredients: 'cheeseAndChicken.ingredients',
    description: 'cheeseAndChicken.description',
    allergy: 'cheeseAndChicken.allergy',
    imageLarge: cheeseAndChickenLarge,
    imageSmall: cheeseAndChickenSmall,
  },
  {
    title: 'mozzarellaAndPesto.title',
    ingredients: 'mozzarellaAndPesto.ingredients',
    description: 'mozzarellaAndPesto.description',
    allergy: 'mozzarellaAndPesto.allergy',
    imageLarge: mozzarellaAndPestoLarge,
    imageSmall: mozzarellaAndPestoSmall,
  },
  {
    title: 'avocadoAndPesto.title',
    ingredients: 'avocadoAndPesto.ingredients',
    description: 'avocadoAndPesto.description',
    allergy: 'avocadoAndPesto.allergy',
    imageLarge: avocadoAndPestoLarge,
    imageSmall: avocadoAndPestoSmall,
  },
];

export const kidsItems: MenuItem[] = [
  {
    title: 'superHero.title',
    description: 'superHero.description',
    price: 'superHero.price',
    allergy: 'superHero.allergy',
  },
  {
    title: 'crepeKid.title',
    description: 'crepeKid.description',
    price: 'crepeKid.price',
    allergy: 'crepeKid.allergy',
  },
];

export const coffeeTeaDescription = [
  { text: 'description.p1' },
  { text: 'description.p2' },
];

export const coffeeTeaItems: MenuItem[] = [
  {
    title: 'items.espresso.title',
    price: 'items.espresso.price',
  },
  {
    title: 'items.latte.title',
    price: 'items.latte.price',
  },
  {
    title: 'items.cappuccino.title',
    price: 'items.cappuccino.price',
  },
  {
    title: 'items.americano.title',
    price: 'items.americano.price',
  },
  {
    title: 'items.flatWhite.title',
    price: 'items.flatWhite.price',
  },
  {
    title: 'items.cortado.title',
    price: 'items.cortado.price',
  },
  {
    title: 'items.latteMacchiato.title',
    price: 'items.latteMacchiato.price',
  },
  {
    title: 'items.kaffeMocca.title',
    price: 'items.kaffeMocca.price',
  },
  {
    title: 'items.filterCoffee.title',
    price: 'items.filterCoffee.price',
  },
  {
    title: 'items.chaiLatte.title',
    price: 'items.chaiLatte.price',
  },
  {
    title: 'items.dirtyChaiLatte.title',
    price: 'items.dirtyChaiLatte.price',
  },
  {
    title: 'items.hotChocolate.title',
    price: 'items.hotChocolate.price',
  },
  {
    title: 'items.matchaLatte.title',
    price: 'items.matchaLatte.price',
  },
  {
    title: 'items.tea.title',
    price: 'items.tea.price',
  },
];

export const otherDrinkDescription = [
  { text: 'description.p1' },
  { text: 'description.p2' },
  { text: 'description.p3' },
];

export const otherItems: MenuItem[] = [
  {
    title: 'items.smoothies.kiwi.title',
    ingredients: 'items.smoothies.kiwi.ingredients',
    price: 'items.smoothies.kiwi.price',
  },
  {
    title: 'items.smoothies.beet.title',
    ingredients: 'items.smoothies.beet.ingredients',
    price: 'items.smoothies.beet.price',
  },
  {
    title: 'items.smoothies.acai.title',
    ingredients: 'items.smoothies.acai.ingredients',
    price: 'items.smoothies.acai.price',
  },
  {
    title: 'items.smoothies.mango.title',
    ingredients: 'items.smoothies.mango.ingredients',
    price: 'items.smoothies.mango.price',
  },
  {
    title: 'items.smoothies.avocado.title',
    ingredients: 'items.smoothies.avocado.ingredients',
    price: 'items.smoothies.avocado.price',
  },
  {
    title: 'items.smoothies.broccoli.title',
    ingredients: 'items.smoothies.broccoli.ingredients',
    price: 'items.smoothies.broccoli.price',
  },
  {
    title: 'items.milkshakes.strawberry.title',
    ingredients: 'items.milkshakes.strawberry.ingredients',
    price: 'items.milkshakes.strawberry.price',
  },
  {
    title: 'items.milkshakes.vanilla.title',
    ingredients: 'items.milkshakes.vanilla.ingredients',
    price: 'items.milkshakes.vanilla.price',
  },
  {
    title: 'items.milkshakes.blueberry.title',
    ingredients: 'items.milkshakes.blueberry.ingredients',
    price: 'items.milkshakes.blueberry.price',
  },
  {
    title: 'items.milkshakes.chocolate.title',
    ingredients: 'items.milkshakes.chocolate.ingredients',
    price: 'items.milkshakes.chocolate.price',
  },
  {
    title: 'items.milkshakes.coffee.title',
    ingredients: 'items.milkshakes.coffee.ingredients',
    price: 'items.milkshakes.coffee.price',
  },
];

export const coffeeImages: Photo[] = [
  {
    src: coffee1.src,
    width: coffee1.width,
    height: coffee1.height,
  },
  {
    src: coffee2.src,
    width: coffee2.width,
    height: coffee2.height,
  },
  {
    src: coffee3.src,
    width: coffee3.width,
    height: coffee3.height,
  },
  {
    src: coffee4.src,
    width: coffee4.width,
    height: coffee4.height,
  },
  {
    src: coffee5.src,
    width: coffee5.width,
    height: coffee5.height,
  },
  {
    src: coffee6.src,
    width: coffee6.width,
    height: coffee6.height,
  },
  {
    src: coffee7.src,
    width: coffee7.width,
    height: coffee7.height,
  },
  {
    src: coffee8.src,
    width: coffee8.width,
    height: coffee8.height,
  },
];

export const otherDrinkImages: Photo[] = [
  {
    src: smoothie1.src,
    width: smoothie1.width,
    height: smoothie1.height,
  },
  {
    src: smoothie2.src,
    width: smoothie2.width,
    height: smoothie2.height,
  },
  {
    src: smoothie3.src,
    width: smoothie3.width,
    height: smoothie3.height,
  },
  {
    src: smoothie4.src,
    width: smoothie4.width,
    height: smoothie4.height,
  },
  {
    src: smoothie5.src,
    width: smoothie5.width,
    height: smoothie5.height,
  },
  { src: strawberry.src, width: strawberry.width, height: strawberry.height },
  { src: chocolate.src, width: chocolate.width, height: chocolate.height },
  { src: coffee.src, width: coffee.width, height: coffee.height },
  { src: blueberry.src, width: blueberry.width, height: blueberry.height },
];
