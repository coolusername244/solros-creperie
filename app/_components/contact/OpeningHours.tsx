import React from 'react';
import { useTranslations } from 'next-intl';
import { openTimes } from '@/_assets/datasets/data';

const OpeningHours = () => {
  const t = useTranslations('contact.open-hours');

  return (
    <section className="contact-section">
      <div className="sub-heading">
        <h5>{t('title')}</h5>
      </div>
      {openTimes.map((time, i) => (
        <span key={i}>
          <p>{t(`days.${time.day}`)}</p>
          <p className="mb-3">{time.times}</p>
        </span>
      ))}
    </section>
  );
};

export default OpeningHours;
