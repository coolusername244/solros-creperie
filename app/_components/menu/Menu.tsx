import React from 'react';
import { useTranslations } from 'next-intl';

import { menuHeros } from '@/_assets/datasets/data';
import ShowcaseImage from '@/_components/ShowcaseImage';

const Menu = () => {
  const t = useTranslations('menu');

  return (
    <section id="menu" className="mt-[100px] lg:mt-[130px]">
      <div className="flex justify-center items-center">
        <div className="w-full pl-12 pr-6">
          <hr className="h-[2px] bg-slate-500" />
        </div>
        <h2 className="section-heading">{t('title')}</h2>
        <div className="w-full pl-6 pr-12">
          <hr className="h-[2px] bg-slate-500" />
        </div>
      </div>
      <ShowcaseImage heros={menuHeros} eager={true} />
    </section>
  );
};

export default Menu;
