import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Nav() {
  const [showNav, setshowNav] = useState(false);

  return (
    <div className="z-20 w-full ambit text-black shadow-md bg-red-900 overflow-x-hidden">
      {/* Mobile Nav */}
      <div className="sm:hidden flex justify-between items-center p-4 relative z-20">
        <div className="logo font-bold">
          <img
            src="./logo/logo.png"
            alt="PHYSIO FITNESS"
            className="h-[34px]"
          />
        </div>
        <div
          className="Burger cursor-pointer text-white transition-colors duration-200 ease-in-out"
          onClick={() => setshowNav((prev) => !prev)}
        >
          <GiHamburgerMenu size={24} className={`${showNav ? 'text-gray-300' : 'text-white'}`} />
        </div>
      </div>

      {/* Mobile Menu */}
      {showNav && (
        <ul
          className="sm:hidden flex flex-col items-center gap-4 p-4 bg-gray-700 text-white transition-all duration-300 ease-in-out transform origin-top"
          style={{ transform: showNav ? 'scaleY(1)' : 'scaleY(0)', opacity: showNav ? '1' : '0' }}
        >
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#who">Who We Are</a>
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#srvs">Our Services</a>
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#tstimnyls">Testimonials</a>
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#exprt">Experts Tips</a>
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#apointmnt">Contact Us</a>
          </li>
        </ul>
      )}

      {/* Desktop Nav */}
      <nav className="hidden sm:flex items-center justify-between px-20 py-4 relative z-20">
        <div className="logo">
          <img
            src="./logo/logo.png"
            alt="PHYSIO FITNESS"
            className="h-[50px]"
          />
        </div>
        <ul className="flex items-center gap-6 text-white">
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#who">Who We Are</a>
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#srvs">Our Services</a>
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#tstimnyls">Testimonials</a>
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#exprt">Experts Tips</a>
          </li>
          <li className="cursor-pointer transition-colors duration-200 hover:text-gray-300">
            <a href="#apointmnt">Contact Us</a>
          </li>
        </ul>
        <button className="rounded-full ring-1 transition-colors duration-200 ease-in-out sm:text-[10px] h-[30px] ring-white px-6 text-white hover:bg-white hover:text-red-900">
          <a href="#apointmnt">BOOK APPOINTMENT</a>
        </button>
      </nav>
      <hr className="hidden sm:block" />
    </div>
  );
}

export default Nav;
