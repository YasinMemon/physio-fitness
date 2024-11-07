import React from "react";

function Moving() {
  return (
    <div className="overflow-x-hidden">
      <p className="text-[#008A96] mt-24 uppercase">Get Moving with Zumba</p>
      <h1 className="mt-2 font-bold text-[#122235] text-2xl font-serif youth sm:text-[40px] sm:leading-[52px]">
        Move, Groove, Get Fit: <br /> Effective Way to Burn Calories with Zumba
      </h1>
      <div className="relative">
      <img className="sm:w-[1202px] sm:h-[558px] mx-auto object-cover rounded-[24px]" alt="" src="Mask group.png" />
      <img src="icons/mba.png" className="absolute hidden sm:block sm:top-20 left-5s sm:text-[124px]" alt="" />
      <img src="icons/ZU.png" className="absolute bottom-10 right-0 hidden sm:block sm:text-[124px] overflow-hidden" alt="" />
      </div>
      <button className=" w-[238px] h-[56px] text-white bg-[#008A96] px-4 py-1 rounded-full">
        <a href="#apointmnt">BOOK YOUR ZUMBA SLOT</a>{" "}
      </button>
    </div>
  );
}

export default Moving;
