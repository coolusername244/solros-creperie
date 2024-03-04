import React from 'react';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations();

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  const year = getCurrentYear();
  return (
    <footer className="light-mint text-center w-full p-4">
      &#169; {year} - {t('copyright')}
    </footer>
  );
};

export default Footer;
