import React from 'react';
import { useTranslations } from 'next-intl';
import { openTimes } from '@/_assets/datasets/data';

const OpeningHours = () => {
  const t = useTranslations('contact.open-hours');

  return (
    <section className="contact-section">
      <div className="section-heading">
        <h5>{t('title')}</h5>
      </div>
      {openTimes.map((time, i) => (
        <>
          <p key={i}>{t(`days.${time.day}`)}</p>
          <p className="mb-3">{time.times}</p>
        </>
      ))}
    </section>
  );
};

export default OpeningHours;
