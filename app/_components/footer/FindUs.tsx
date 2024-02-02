import React from 'react';
import { useTranslations } from 'next-intl';

const FindUs = () => {
  const t = useTranslations('footer');

  return (
    <section className="footer-section lg:basis-1/3">
      <div className="footer-heading">
        <h5>{t('find-us')}</h5>
      </div>
      <a
        className="footer-text underline"
        href="https://maps.app.goo.gl/3rH2jLrK8ed4ZN1f9"
        target="_blank"
      >
        Hornsgatan 29B, Stockholm, 11849
      </a>
    </section>
  );
};

export default FindUs;
