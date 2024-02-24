import React from 'react';
import { useTranslations } from 'next-intl';

import { about } from '@/_assets/datasets/data';

const About = () => {
  const t = useTranslations('about');
  return (
    <section className="screen-content">
      <p>{t('title')}</p>
      {about.map((p, i) => (
        <p key={i} className="mb-6">
          {t(p.text)}
        </p>
      ))}
    </section>
  );
};

export default About;
