import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { TfiEmail } from 'react-icons/tfi';
import { FiPhone } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white flex flex-col items-center p-12">
      <p>Opening Times</p>
      <FaRegClock />
      <p>Monday - Friday</p>
      <p>0800 - 2000</p>
      <p>Saturday</p>
      <p>0900 - 1800</p>
      <p>Sunday</p>
      <p>1000 - 1700</p>
      <p>Find Us</p>
      <CiLocationOn />
      <p>Hornsgatan 29B, Stockholm, 118 49</p>
      <p>Contact Us</p>
      <TfiEmail />
      <p>info@solroscreperie.se</p>
      <FiPhone />
      <p>+46700415015</p>
      <p>Social Media</p>
      <FaInstagram />
      <p>instagram</p>
    </footer>
  );
};

export default Footer;
