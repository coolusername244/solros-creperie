import { StaticImageData } from 'next/image';

export type MetaParams = {
  params: {
    locale: 'en' | 'sv' | 'ua';
  };
};

export type About = {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
  p8: string;
};

export type Footer = {
  'open-hours': OpenHours;
  'find-us': string;
  'contact-us': string;
  'social-media': string;
};

export type OpenHours = {
  title: string;
  days: Days;
};

export type Days = {
  'monday-friday': string;
  saturday: string;
  sunday: string;
};

export type Menu = {
  title: string;
  galettes: string;
  crepes: string;
  paninis: string;
  kids: string;
  'coffee-and-tea': string;
  'other-drinks': string;
};

export type Meta = {
  title: string;
  description: string;
};

export type Navlink = {
  name: string;
};

export type OpenTime = {
  day: string;
  times: string;
};

export type ContactMethod = {
  method: string;
  icon: JSX.Element;
  contact: string;
  href: string;
};

export type SocialLink = {
  name: string;
  icon: JSX.Element;
  link: string;
};

export type locales = {
  locale: string;
  language: string;
  flag: React.JSX.Element;
};

export type Hero = {
  title: string;
  image: StaticImageData;
};

export type AboutParagraph = {
  text: string;
};
