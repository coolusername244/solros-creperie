import React from 'react';
import { useTranslations } from 'next-intl';

import { newsHeros } from '@/_assets/datasets/data';
import ShowcaseImage from '@/_components/ShowcaseImage';

const News = () => {
  const t = useTranslations('news');

  return (
    <section id="news">
      <h2 className="section-heading">{t('title')}</h2>
      <ShowcaseImage heros={newsHeros} />
      <div className="w-[75vw] m-auto h-96 mb-12 justify-center items-center flex text-white text-4xl uppercase text-center bg-slate-600">
        <p>video will go here</p>
      </div>
    </section>
  );
};

export default News;
