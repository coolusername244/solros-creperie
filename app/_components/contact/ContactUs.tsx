import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { contactMethods } from '@/_assets/datasets/data';

const ContactUs = () => {
  const t = useTranslations('contact');

  return (
    <section className="contact-section">
      <div className="section-heading">
        <h5>{t('contact-us')}</h5>
      </div>
      <ul className="space-y-3">
        {contactMethods.map((contact, i) => (
          <li key={i}>
            <Link href={contact.href} className="flex justify-center">
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
