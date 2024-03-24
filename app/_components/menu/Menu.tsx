import React from 'react';
import { useTranslations } from 'next-intl';

import { menuHeros } from '@/_assets/datasets/data';
import ShowcaseImage from '@/_components/ShowcaseImage';

const Menu = () => {
  const t = useTranslations('menu');

  return (
    <section id="menu" className="mt-[100px] lg:mt-[130px]">
      <h2 className="section-heading">{t('title')}</h2>
      <ShowcaseImage heros={menuHeros} eager={true} />
    </section>
  );
};

export default Menu;
