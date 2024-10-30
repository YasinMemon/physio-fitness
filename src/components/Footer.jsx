import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0D4A73] text-white p-10 sm:flex sm:justify-between sm:items-center">
      <div className="sm:w-1/3 mb-8 sm:mb-0">
        <h3 className="text-2xl font-bold youth ">Physio Fitness</h3>
        <p className="mt-2 text-gray-300 ambit">
          Rajkot's premier physiotherapy center. Effective treatments, expert care, personalized solutions.
        </p>
        <div className="flex mt-4 space-x-4">
          <a href="https://www.facebook.com/physio.fitness1" aria-label="Facebook">
            <FaFacebook className="text-white hover:text-[#3b5998]" size={20} />
          </a>
          
          <a href="https://www.instagram.com/physio_fitness07/" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-[#E1306C]" size={20} />
          </a>
          <a href="https://www.youtube.com/@physio-fitness" aria-label="YouTube">
            <FaYoutube className="text-white hover:text-[#FF0000]" size={20} />
          </a>
        </div>
        <p className="mt-4 text-gray-400">&copy; 2024 Physio Fitness. All Rights Reserved.</p>
      </div>

      <div className="sm:w-1/2 text-center mb-8 sm:mb-0">
        <h4 className="text-lg font-semibold">Links</h4>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li><a href="#who" className="hover:text-white">Who We Are</a></li>
          <li><a href="#srvs" className="hover:text-white">Our Services</a></li>
          <li><a href="#tstimnyls" className="hover:text-white">Testimonials</a></li>
          <li><a href="#exprt" className="hover:text-white">Expert Tips</a></li>
          <li><a href="#apointmnt" className="hover:text-white">Contact Us</a></li>
        </ul>
      </div>

      <div className="sm:w-1/3">
        <h4 className="text-lg font-semibold">Contact</h4>
        <p className="mt-4 text-gray-300">
          6th Floor, Fortune Empire, Speedwell Party Plot, Near Shyamji SkyLife Apartment, Mota Mava, Rajkot, Gujarat 360005
        </p>
        <p className="mt-2 text-gray-300">+91 91061 - 12843</p>
        <p className="mt-2 text-gray-300"> <a href="mailto:care@physiofitness.com">care@physiofitness.com</a></p>
        <div className="mt-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4990829072326!2d70.75998147410344!3d22.259076744390644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb0d1195ee39%3A0xd70924208c84f4a9!2sPhysio%20Fitness%20Physiotherapy%20Clinic%20Rajkot%20l%20Physiotherapy%20Consultation%20l%20Fitness%20Consultation%20l%20Sports%20Injury%20Recovery!5e0!3m2!1sen!2sin!4v1730270392859!5m2!1sen!2sin" width="100%" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
