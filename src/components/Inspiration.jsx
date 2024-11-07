import React from "react";

function Inspiration() {
  return (
    <div className="relative overflow-x-hidden">
      <p className="text-[#008A96] ambit">Community of Care</p>
      <hr className="w-[20vw] text-center mx-auto my-4" />
      <h2 className="font-bold text-xl text-[#122235] font-serif mt-4 youth capitalize sm:text-[40px] sm:leading-[52px]">
        Inspiring Journeys:
      </h2>
      <h2 className="font-bold text-xl font-serif text-[#122235] youth sm:text-[40px] sm:leading-[52px]">
        Physiotherapy Changed Their Lives
      </h2>
      <p className="mt-2 ambit sm:text-[18px] sm:leading-[32px] text-[#2F323D]">
        Hear directly from our satisfied patients in these inspiring video
        testimonials. Watch them share their
      </p>
      <p className="ambit sm:text-[18px]">
        personal journeys of recovery and transformation through physiotherapy.
      </p>

      <div className="video sm:flex justify-center items-center mt-16">
        {/* Container for the overlay and main image */}
        <div className="relative sm:w-[50vw] text-center rounded-[24px]">
          {/* Overlay image */}
          <img
            className="absolute h-[508px] transform -scale-x-100 w-[333px] opacity-50 bottom-10 right-72"
            src="/desine.png"
            alt=""
          />
          {/* Main image */}
          <img
            className="w-full sm:w-[812px] sm:h-[650px] object-cover rounded-[24px] mx-auto relative z-10"
            src="./video/poster.png"
            alt="poster"
          />
        </div>

        {/* Right side content */}
        <div className="flex gap-4 ml-4">
          <img src="Vector.png" className="h-10" alt="" />
          <img src="Vector.png" className="h-10" alt="" />
        </div>

        <div className="rightside text-left mt-2 sm:w-[50vw] sm:block sm:leading-[38px] ambit sm:text-[18px]">
          <p className="text-[#323232]">
            I was struggling with debilitating pain in my feet and back for
            months. Traditional treatments weren't helping, but the personalized
            care at Physio Fitness was a game-changer. The physiotherapists took
            the time to understand my specific needs and developed a tailored
            treatment plan. After a few weeks, I started to notice a significant
            improvement. I'm so grateful for the care and support I received
            from the team at Physio Fitness.
          </p>
          <p className="font-bold youth text-[#008A96] text-start mt-6 youth upper">
            Truptiben Majethiya
          </p>
          <p className="text-start ambit sm:text-[18px]">
            Condition Cured: severe bilateral plantar fasciitis & Back Pain
          </p>
          <div className="flex gap-4">
            <img src="/icons/next.png" className="-scale-x-100 cursor-pointer sm:h-[40px] sm:w-[40px]" />
            <img src="/icons/next.png" alt="" className="cursor-pointer sm:h-[40px] sm:w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
