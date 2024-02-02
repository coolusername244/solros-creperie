import React from 'react';
import { ContactMethod } from '@/_types/types';
import { FiPhone } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';

const contactMethods: ContactMethod[] = [
  {
    method: 'Phone',
    icon: <FiPhone />,
    href: 'tel:+46700415015',
    contact: '+46700415015',
  },
  {
    method: 'Email',
    icon: <TfiEmail />,
    href: 'mailto:info@solroscreperie.se',
    contact: 'info@solroscreperie.se',
  },
];

const ContactUs = () => {
  return (
    <section className="footer-section lg:basis-1/3">
      <div className="footer-heading">
        <h5>Contact Us</h5>
      </div>
      <ul className="space-y-3">
        {contactMethods.map(contact => (
          <li key={contact.method} className="flex lg:justify-center">
            <a href={contact.href} className="footer-text flex items-center">
              <span className="text-xl">{contact.icon}</span>
              <span className="ml-3">{contact.contact}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactUs;
