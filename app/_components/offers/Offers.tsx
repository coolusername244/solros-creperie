import React from 'react';
import { useTranslations } from 'next-intl';

import ShowcaseImage from '@/_components/ShowcaseImage';
import { offersHeros } from '@/_assets/datasets/data';

const Offers = () => {
  const t = useTranslations('offers');

  return (
    <section id="offers" className="light-mint">
      <h2 className="section-heading">{t('title')}</h2>
      <ShowcaseImage heros={offersHeros} />
    </section>
  );
};

export default Offers;
