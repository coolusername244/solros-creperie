import React from 'react';
import { OpenTime } from '@/_types/types';
import { FaRegClock } from 'react-icons/fa';

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

const OpeningTimes = () => {
  return (
    <section className="footer-section">
      <div className="footer-heading">
        <FaRegClock />
        <h5 className="ml-3">Opening Times</h5>
      </div>
      <div className="footer-text">
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

export default OpeningTimes;
