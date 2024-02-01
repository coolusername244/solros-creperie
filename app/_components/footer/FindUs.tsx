import React from 'react';
import { SlLocationPin } from 'react-icons/sl';

const FindUs = () => {
  return (
    <section>
      <div className="footer-heading">
        <SlLocationPin />
        <h5 className="ml-3">Find Us</h5>
      </div>
      <a
        className="footer-text underline"
        href="https://maps.app.goo.gl/3rH2jLrK8ed4ZN1f9"
      >
        Hornsgatan 29B, Stockholm, 118 49
      </a>
    </section>
  );
};

export default FindUs;
