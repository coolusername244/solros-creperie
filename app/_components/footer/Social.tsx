import React from 'react';
import { SocialLink } from '@/_types/types';
import { FaInstagram } from 'react-icons/fa';

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/solroscreperie',
  },
];

const Social = () => {
  return (
    <section className="footer-section lg:basis-1/3">
      <div className="footer-heading">
        <h5>Social Media</h5>
      </div>
      <ul className="flex lg:justify-center">
        {socialLinks.map(social => (
          <li key={social.name}>
            <button className="social-button">
              <a href={social.link}>{social.icon}</a>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Social;
