import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [showNav, setshowNav] = useState(false);

  return (
    <div className=" z-20 top-0 w-full text-white shadow-md overflow-x-hidden  sm:bg-transparent">
      {/* Mobile Navbar */}
      <div className="sm:hidden flex justify-between items-center p-4">
        <div className="logo">
          <img
            src="./logo/logo.png"
            alt="PHYSIO FITNESS"
            className="h-[44px]"
          />
        </div>
        <div className="Burger text-white cursor-pointer">
          <GiHamburgerMenu onClick={() => setshowNav((prev) => !prev)} size={24} />
        </div>
      </div>

      {/* Mobile Menu */}
      {showNav && (
        <ul className="sm:hidden flex flex-col items-center transition ease-in-out duration-75 gap-4 p-4 bg-[#0E2541] text-white">
          <li className='cursor-pointer'><a href="#who">Who We Are</a></li>
          <li className='cursor-pointer'><a href="#srvs">Our Services</a></li>
          <li className='cursor-pointer'><a href="#tstimnyls">Testimonials</a></li>
          <li className='cursor-pointer'><a href="#exprt">Experts Tips</a></li>
          <li className='cursor-pointer'><a href="#apointmnt">Contact Us</a></li>
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
        <li className='cursor-pointer hover:text-[#008A96]'><a href="#who">Who We Are</a></li>
        <li className='cursor-pointer hover:text-[#008A96]'><a href="#srvs">Our Services</a></li>
        <li className='cursor-pointer hover:text-[#008A96]'><a href="#tstimnyls">Testimonials</a></li>
        <li className='cursor-pointer hover:text-[#008A96]'><a href="#exprt">Experts Tips</a></li>
        <li className='cursor-pointer hover:text-[#008A96]'><a href="#apointmnt">Contact Us</a></li>
        </ul>
        {/* <button className="flex justify-center items-center"> */}
          <a className='rounded-full w-[157px] ring-1 hover:scale-[1.05] hover:bg-[#008A96] text-nowrap text-[15px] h-[40px] flex justify-center items-center ring-white px-6' href="#apointmnt">Book Appointment</a>
        {/* </button> */}
      </nav>
      <hr className="hidden sm:block" />
    </div>
  );
}

export default Navbar;
