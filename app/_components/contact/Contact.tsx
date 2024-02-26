import React from 'react';
import OpeningHours from './OpeningHours';
import FindUs from './FindUs';
import ContactUs from './ContactUs';

const Contact = () => {
  return (
    <section className="footer-component">
      <OpeningHours />
      <hr className="hidden lg:flex bg-secondary my-8" />
      <div className="lg:flex lg:justify-evenly">
        <FindUs />
        <ContactUs />
      </div>
    </section>
  );
};

export default Contact;
