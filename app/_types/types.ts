export type Navlink = {
  name: string;
  path: string;
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
