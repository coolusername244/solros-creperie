import React from 'react';

const FindUs = () => {
  return (
    <section>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.838741049541!2d18.062087677271304!3d59.318949674609314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f773064ce7121%3A0x47761528516fb25f!2sSolros%20Cr%C3%AAperie!5e0!3m2!1sen!2sse!4v1709643611416!5m2!1sen!2sse"
          width="400"
          height="300"
          className="w-[90%] lg:hidden"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.838741049541!2d18.062087677271304!3d59.318949674609314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f773064ce7121%3A0x47761528516fb25f!2sSolros%20Cr%C3%AAperie!5e0!3m2!1sen!2sse!4v1709563499173!5m2!1sen!2sse"
          width="600"
          height="450"
          className=" hidden lg:block"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default FindUs;
