import React from 'react';
import { newsHeros } from '@/_assets/datasets/data';
import ShowcaseImage from '@/_components/ShowcaseImage';
import SectionHeading from '@/_components/SectionHeading';

const News = () => {
  return (
    <section className="screen-content">
      <SectionHeading heading={'news.title'} />
      <ShowcaseImage heros={newsHeros} cols={2} />
    </section>
  );
};

export default News;
