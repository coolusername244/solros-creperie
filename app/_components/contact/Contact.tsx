import React from 'react';
import OpeningHours from './OpeningHours';
import FindUs from './FindUs';
import ContactUs from './ContactUs';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-100px)] flex items-center justify-center"
    >
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
