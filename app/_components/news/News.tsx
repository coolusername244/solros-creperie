import React from 'react';
import { newsHeros } from '@/_assets/datasets/data';
import ShowcaseImage from '@/_components/ShowcaseImage';
import SectionHeading from '@/_components/SectionHeading';

const News = () => {
  return (
    <section>
      <SectionHeading heading={'news.title'} />
      <ShowcaseImage heros={newsHeros} />
    </section>
  );
};

export default News;
