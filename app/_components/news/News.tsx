import React from 'react';
import { useTranslations } from 'next-intl';

import { newsHeros } from '@/_assets/datasets/data';
import ShowcaseImage from '@/_components/ShowcaseImage';

const News = () => {
  const t = useTranslations('news');

  return (
    <section id="news">
      <div className="flex justify-center items-center">
        <div className="w-full pl-12 pr-6">
          <hr className="h-[2px] bg-slate-500" />
        </div>
        <h2 className="section-heading">{t('title')}</h2>
        <div className="w-full pl-6 pr-12">
          <hr className="h-[2px] bg-slate-500" />
        </div>
      </div>
      <ShowcaseImage heros={newsHeros} />
      {/* <div className="w-[75vw] m-auto h-96 mb-12 justify-center items-center flex text-white text-4xl uppercase text-center bg-slate-600">
        <p>video will go here</p>
      </div> */}
    </section>
  );
};

export default News;
