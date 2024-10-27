import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0D4A73] text-white p-10 sm:flex sm:justify-between sm:items-center">
      <div className="sm:w-1/3 mb-8 sm:mb-0">
        <h3 className="text-2xl font-bold">Physio Fitness</h3>
        <p className="mt-2 text-gray-300">
          Rajkot's premier physiotherapy center. Effective treatments, expert care, personalized solutions.
        </p>
        <div className="flex mt-4 space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebook className="text-white hover:text-[#3b5998]" size={20} />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-[#00acee]" size={20} />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-[#E1306C]" size={20} />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube className="text-white hover:text-[#FF0000]" size={20} />
          </a>
        </div>
        <p className="mt-4 text-gray-400">&copy; 2024 Physio Fitness. All Rights Reserved.</p>
      </div>

      <div className="sm:w-1/3 mb-8 sm:mb-0">
        <h4 className="text-lg font-semibold">Links</h4>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-white">Who We Are</a></li>
          <li><a href="#" className="hover:text-white">Our Services</a></li>
          <li><a href="#" className="hover:text-white">Testimonials</a></li>
          <li><a href="#" className="hover:text-white">Expert Tips</a></li>
          <li><a href="#" className="hover:text-white">Contact Us</a></li>
        </ul>
      </div>

      <div className="sm:w-1/3">
        <h4 className="text-lg font-semibold">Contact</h4>
        <p className="mt-4 text-gray-300">
          6th Floor, Fortune Empire, Speedwell Party Plot, Near Shyamji SkyLife Apartment, Mota Mava, Rajkot, Gujarat 360005
        </p>
        <p className="mt-2 text-gray-300">+91 91069 16243</p>
        <p className="mt-2 text-gray-300">care@physiofitness.com</p>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509124!2d144.95373531531652!3d-37.816279179751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f00f8bfb%3A0xb100b1e8b5b0e2c0!2sFortune%20Empire%20Rajkot!5e0!3m2!1sen!2sin!4v1601234567890!5m2!1sen!2sin"
            width="100%"
            height="150"
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
