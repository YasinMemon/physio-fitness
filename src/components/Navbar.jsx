import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [showNav, setshowNav] = useState(false);

  return (
    <div className="fixed z-20 top-0 w-full text-white shadow-md overflow-x-hidden bg-gray-800 sm:bg-transparent">
      {/* Mobile Navbar */}
      <div className="sm:hidden flex justify-between items-center p-4">
        <div className="logo">
          <img
            src="./logo/logo.png"
            alt="PHYSIO FITNESS"
            className="h-[24px]"
          />
        </div>
        <div className="Burger text-white cursor-pointer">
          <GiHamburgerMenu onClick={() => setshowNav((prev) => !prev)} size={24} />
        </div>
      </div>

      {/* Mobile Menu */}
      {showNav && (
        <ul className="sm:hidden flex flex-col items-center gap-4 p-4 bg-gray-700 text-white">
          <li>Who We Are</li>
          <li>Our Services</li>
          <li>Testimonials</li>
          <li>Experts Tips</li>
          <li>Contact Us</li>
        </ul>
      )}

      {/* Desktop Navbar */}
      <nav className="hidden sm:flex items-center justify-between px-20 py-4">
        <div className="logo">
          <img
            src="./logo/logo.png"
            alt="PHYSIO FITNESS"
            className="h-[36px]"
          />
        </div>
        <ul className="flex items-center gap-6">
          <li>Who We Are</li>
          <li>Our Services</li>
          <li>Testimonials</li>
          <li>Experts Tips</li>
          <li>Contact Us</li>
        </ul>
        <button className="rounded-lg ring-1 ring-white px-6">
          BOOK APPOINTMENT
        </button>
      </nav>
      <hr className="hidden sm:block" />
    </div>
  );
}

export default Navbar;
