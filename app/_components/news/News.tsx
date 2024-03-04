import React from 'react';
import { newsHeros } from '@/_assets/datasets/data';
import ShowcaseImage from '@/_components/ShowcaseImage';
import SectionHeading from '@/_components/SectionHeading';

const News = () => {
  return (
    <section>
      <SectionHeading heading={'news.title'} />
      <ShowcaseImage heros={newsHeros} />
      <div className="w-[75vw] m-auto h-96 mb-12 justify-center items-center flex text-white text-4xl uppercase text-center bg-slate-600">
        <p>video will go here</p>
      </div>
    </section>
  );
};

export default News;
