import { StaticImageData } from 'next/image';

export type MetaParams = {
  params: {
    locale: 'en' | 'sv' | 'uk';
  };
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
