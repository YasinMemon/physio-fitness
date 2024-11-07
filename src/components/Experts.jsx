import React from 'react';

function Experts() {
  return (
    <div className="mt-20 flex flex-col py-20 sm:flex-row overflow-x-hidden px-5 sm:px-10 gap-6 sm:gap-10 justify-center items-center">
      {/* Left Section */}
      <div className="leftside font-bold text-center sm:text-left sm:w-[50%]">
        <p className="text-[#008A96] ambit text-lg sm:text-xl">Guide to Well-being</p>
        <h1 className="text-2xl sm:text-4xl text-[#122235] font-bold leading-tight youth">
          Expert Tips and Advice
          <br />
          Health and Wellness Guide by Physio-Fitness
        </h1>
      </div>

      {/* Right Section */}
      <div className="rightside text-[#2F323D] sm:w-[50%] text-center sm:text-left text-base sm:text-lg mb-4">
        <p className='text-[#2F323D]'>
          Get expert advice on health and wellness from our team of skilled physiotherapists. Discover valuable tips and insights to improve your overall well-being.
        </p>
        <button className="text-[#008A96] text-lg sm:text-xl px-6 py-2 ring-[#008A96] ring-1 rounded-full mt-4 transition-transform transform hover:scale-105 mb-4 box-border">
          <a href="#apointmnt">Get Expert Advice</a>
        </button>
      </div>
    </div>
  );
}

export default Experts;
