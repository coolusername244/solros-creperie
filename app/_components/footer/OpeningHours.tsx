import React from 'react';
import { OpenTime } from '@/_types/types';

const openTimes: OpenTime[] = [
  {
    day: 'Monday - Friday',
    times: '08:00 - 20:00',
  },
  {
    day: 'Saturday',
    times: '09:00 - 18:00',
  },
  {
    day: 'Sunday',
    times: '10:00 - 17:00',
  },
];

const OpeningHours = () => {
  return (
    <section className="footer-section">
      <div className="footer-heading">
        <h5>Opening Hours</h5>
      </div>
      <div className="footer-text ml-4">
        {openTimes.map((time, i) => (
          <>
            <p key={i}>{time.day}</p>
            <p className="mb-3">{time.times}</p>
          </>
        ))}
      </div>
    </section>
  );
};

export default OpeningHours;
