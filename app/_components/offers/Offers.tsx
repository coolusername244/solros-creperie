import React from 'react';
import { useTranslations } from 'next-intl';

import ShowcaseImage from '@/_components/ShowcaseImage';
import { offersHeros } from '@/_assets/datasets/data';

const Offers = () => {
  const t = useTranslations('offers');

  return (
    <section id="offers" className="scroll-mt-[130px]">
      <div className="flex justify-center items-center">
        <div className="w-full pl-12 pr-6">
          <hr className="h-[2px] bg-slate-500" />
        </div>
        <h2 className="section-heading">{t('title')}</h2>
        <div className="w-full pl-6 pr-12">
          <hr className="h-[2px] bg-slate-500" />
        </div>
      </div>
      <ShowcaseImage heros={offersHeros} />
    </section>
  );
};

export default Offers;
