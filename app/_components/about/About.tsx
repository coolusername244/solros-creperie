import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import cafe from '@/_assets/images/cafe/cafe.jpg';
import { about } from '@/_assets/datasets/data';

const About = () => {
  const t = useTranslations('about');

  return (
    <section id="about" className="light-mint px-6">
      <div className="xl:w-full">
        {about.slice(0, 1).map((p, i) => (
          <div key={i} className="flex justify-center items-center">
            <div className="w-full px-6">
              <hr className="h-[2px] bg-slate-500" />
            </div>
            <h2 className="section-heading text-nowrap">{t(p.text)}</h2>
            <div className="w-full px-6">
              <hr className="h-[2px] bg-slate-500" />
            </div>
          </div>
        ))}
      </div>
      <div className="xl:w-full">
        {about.slice(1, 2).map((p, i) => (
          <p key={i} className="about-text">
            {t(p.text)}
          </p>
        ))}
      </div>
      <div className="flex flex-col xl:flex-row xl:items-center">
        <div className="xl:w-2/5 xl:order-last xl:m-auto">
          <Image
            src={cafe}
            alt={'cafe'}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
            className="pb-6 px-2 md:px-20 lg:px-28 xl:px-0 xl:w-full"
          />
        </div>
        <div className="xl:w-1/2">
          {about.slice(2, 6).map((p, i) => (
            <p key={i} className="about-text">
              {t(p.text)}
            </p>
          ))}
        </div>
      </div>
      <div className="xl:w-full ">
        {about.slice(6).map((p, i) => (
          <p key={i} className="about-text">
            {t(p.text)}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
