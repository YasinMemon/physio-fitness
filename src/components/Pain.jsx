import React from "react";

function Pain() {
  return (
    <div className="bg-[#0E2541] relative sm:px-72 py-10 rounded-xl sm:mx-10 my-10">
      {/* <img 
            className='absolute h-[811px] w-[651px] transform opacity-10 -scale-50  right-0'
            src="/desine.png" 
            alt="" 
          /> */}
      <img 
            className='absolute h-[300px] w-[316px] transform opacity-10 -top-[3rem] left-0'
            src="/desine.png" 
            alt="" 
          />
      <h1 className="font-bold text-2xl font-serif text-white youth sm:text-[40px]">
        Living with Pain and Injuries?
      </h1>
      <h2 className="font-bold text-2xl sm:mt-3 font-serif text-white youth sm:text-[40px]">
        Get long Relief with our Treatments{" "}
      </h2>
      <p className="text-white mt-4 ambit sm:text-[18px]">
        Living with Pain and Injuries? Get long Relief with our Treatments Our
        team of skilled physiotherapists is here to help. Experience the
        benefits of our effective solutions and start your journey to recovery
        today. 
      </p>
      <button className="mt-4 bg-white px-4 youth py-1 rounded-full"> <a href="#apointmnt"> Book Your Free Consultation</a></button>
    </div>
  );
}

export default Pain;
