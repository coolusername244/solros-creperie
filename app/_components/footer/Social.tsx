import React from 'react';
import { SocialLink } from '@/_types/types';
import { FaInstagram } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/solroscreperie',
  },
];

const Social = () => {
  const t = useTranslations('footer');

  return (
    <section className="footer-section lg:basis-1/3">
      <div className="footer-heading">
        <h5>{t('social-media')}</h5>
      </div>
      <ul className="flex lg:justify-center">
        {socialLinks.map(social => (
          <li key={social.name}>
            <button className="social-button">
              <Link href={social.link}>{social.icon}</Link>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Social;
