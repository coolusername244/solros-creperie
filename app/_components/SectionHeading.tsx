import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

type SectionHeadingProps = {
  heading: string;
};

const SectionHeading: FC<SectionHeadingProps> = heading => {
  const t = useTranslations();
  return (
    <div className="flex items-center text-center justify-center py-12 text-3xl font-semibold uppercase">
      <h2>{t(heading.heading)}</h2>
    </div>
  );
};

export default SectionHeading;
