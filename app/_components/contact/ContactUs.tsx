import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { contactMethods } from '@/_assets/datasets/data';

const ContactUs = () => {
  const t = useTranslations('footer');

  return (
    <section className="footer-section lg:basis-1/3">
      <div className="footer-heading">
        <h5>{t('contact-us')}</h5>
      </div>
      <ul className="space-y-3">
        {contactMethods.map((contact, i) => (
          <li key={i} className="flex lg:justify-center">
            <Link href={contact.href} className="footer-text flex items-center">
              <span className="text-xl">{contact.icon}</span>
              <span className="ml-3">{contact.contact}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactUs;
