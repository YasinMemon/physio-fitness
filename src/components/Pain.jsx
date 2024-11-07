import React from "react";

function Pain() {
  return (
    <div className="bg-[#0E2541] overflow-hidden mb-40 relative sm:px-72 py-10 rounded-xl sm:mx-10 my-10">
      {/* <img 
            className='absolute h-[811px] w-[651px] transform opacity-10 -scale-50  right-0'
            src="/desine.png" 
            alt="" 
          /> */}
      <img
        className="absolute sm:h-[300px] hidden sm:block sm:w-[316px] transform opacity-10 -top-[3rem] left-0"
        src="/desine.png"
        alt=""
      />
      <img
        className="absolute sm:h-[300px] sm:w-[316px] hidden sm:block -scale-100 opacity-10 -bottom-10 -right-10"
        src="/desine.png"
        alt=""
      />
      <div className="sm:w-703px">
      <h1 className="font-bold text-2xl font-serif text-white text-center ml-3 youth sm:text-[40px] sm:leading-[52px]">
        Living with Pain and Injuries? </h1> <h1 className="font-bold text-center text-2xl font-serif text-white ml-3 youth sm:text-[40px] sm:leading-[52px] text-nowrap"> Get long Relief with our Treatments{" "}
      </h1>
      <p className="text-white mt-4 ml-3 sm:text-[18px] text-center sm:leading-[30px]">
      Our team of skilled physiotherapists is here to help. Experience the benefits of our effective solutions and start your journey to recovery today.
      </p>
      </div>
      <button className="mt-4 bg-white px-4 text-[18px] py-1 rounded-full">
        {" "}
        <a href="#apointmnt"> Book Your Free Consultation</a>
      </button>
    </div>
  );
}

export default Pain;
