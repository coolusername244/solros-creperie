import React from 'react';
import { OpenTime } from '@/_types/types';
import { useTranslations } from 'next-intl';

const openTimes: OpenTime[] = [
  {
    day: 'monday-friday',
    times: '08:00 - 20:00',
  },
  {
    day: 'saturday',
    times: '09:00 - 18:00',
  },
  {
    day: 'sunday',
    times: '10:00 - 17:00',
  },
];

const OpeningHours = () => {
  const t = useTranslations('footer.open-hours');

  return (
    <section className="footer-section lg:w-[100%] lg:text-center">
      <div className="footer-heading lg:justify-center">
        <h5>{t('title')}</h5>
      </div>
      <div className="footer-text">
        {openTimes.map((time, i) => (
          <>
            <p key={i}>{t(`days.${time.day}`)}</p>
            <p className="mb-3">{time.times}</p>
          </>
        ))}
      </div>
    </section>
  );
};

export default OpeningHours;
