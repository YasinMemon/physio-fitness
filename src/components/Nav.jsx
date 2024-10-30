import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Nav() {
  const [showNav, setshowNav] = useState(false);

  return (
    <div className="fixed z-20 top-0 w-full ambit text-white shadow-md overflow-x-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 hidden sm:block bg-black opacity-70 z-10"></div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex justify-between items-center p-4 relative z-20">
        <div className="logo font-bold">
          <img
            src="./logo/logo.png"
            alt="PHYSIO FITNESS"
            className="h-[24px]"
          />
        </div>
        <div className="Burger cursor-pointer text-black">
          <GiHamburgerMenu onClick={() => setshowNav((prev) => !prev)} size={24} />
        </div>
      </div>

      {/* Mobile Menu */}
      {showNav && (
        <ul className="sm:hidden flex flex-col z-50 items-center gap-4 p-4 bg-gray-700 text-white z-20">
          <li className="cursor-pointer"><a href="#who">Who We Are</a></li>
          <li className="cursor-pointer"><a href="#srvs">Our Services</a></li>
          <li className="cursor-pointer"><a href="#tstimnyls">Testimonials</a></li>
          <li className="cursor-pointer"><a href="#exprt">Experts Tips</a></li>
          <li className="cursor-pointer"><a href="#apointmnt">Contact Us</a></li>
        </ul>
      )}

      {/* Desktop Nav */}
      <nav className="hidden sm:flex items-center justify-between px-20 py-4 relative z-20">
        <div className="logo">
          <img
            src="./logo/logo.png"
            alt="PHYSIO FITNESS"
            className="h-[36px]"
          />
        </div>
        <ul className="flex items-center gap-6  text-white">
          <li className="cursor-pointer"><a href="#who">Who We Are</a></li>
          <li className="cursor-pointer"><a href="#srvs">Our Services</a></li>
          <li className="cursor-pointer"><a href="#tstimnyls">Testimonials</a></li>
          <li className="cursor-pointer"><a href="#exprt">Experts Tips</a></li>
          <li className="cursor-pointer"><a href="#apointmnt">Contact Us</a></li>
        </ul>
        <button className="rounded-lg ring-1 ring-white px-6 text-white">
          <a href="#apointmnt">BOOK APPOINTMENT</a>
        </button>
      </nav>
      <hr className="hidden sm:block" />
    </div>
  );
}

export default Nav;
