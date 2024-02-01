import React from 'react';
import OpeningHours from './OpeningHours';
import FindUs from './FindUs';
import ContactUs from './ContactUs';
import Social from './Social';

const Footer = () => {
  return (
    <footer className="footer-component">
      <OpeningHours />
      <FindUs />
      <ContactUs />
      <Social />
    </footer>
  );
};

export default Footer;
