import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import cafe from '@/_assets/images/cafe/cafe.jpg';

import { about } from '@/_assets/datasets/data';
import SectionHeading from '../SectionHeading';

const About = () => {
  const t = useTranslations('about');
  return (
    <section className="screen-content px-6">
      {about.map((p, i) =>
        i === 0 ? (
          <div key={i}>
            <SectionHeading heading={t(p.text)} />
          </div>
        ) : i === 1 ? (
          <p key={i} className="about-text">
            {t(p.text)}
          </p>
        ) : null,
      )}
      <Image src={cafe} alt={'cafe'} className="pb-6 px-4" />
      {about.map((p, i) =>
        i > 2 && i <= 5 ? (
          <p key={i} className="about-text">
            {t(p.text)}
          </p>
        ) : null,
      )}
      <div className="col-span-2">
        {about.map((p, i) =>
          i >= 6 ? (
            <p key={i} className="about-text">
              {t(p.text)}
            </p>
          ) : null,
        )}
      </div>
    </section>
  );
};

export default About;
