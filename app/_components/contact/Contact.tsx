import React from 'react';
import OpeningHours from './OpeningHours';
import FindUs from './FindUs';
import ContactUs from './ContactUs';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-grid">
        <OpeningHours />
        <div className="lg:row-span-2">
          <FindUs />
        </div>
        <ContactUs />
      </div>
    </section>
  );
};

export default Contact;
