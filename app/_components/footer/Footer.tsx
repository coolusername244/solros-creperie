import React from 'react';
import OpeningHours from './OpeningHours';
import FindUs from './FindUs';
import ContactUs from './ContactUs';
import Social from './Social';

const Footer = () => {
  return (
    <footer className="footer-component">
      <OpeningHours />
      <hr className="hidden lg:flex bg-secondary my-8" />
      <div className="lg:flex">
        <FindUs />
        <ContactUs />
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
