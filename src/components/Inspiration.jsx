import React from 'react';

function Inspiration() {
  return (
    <div className="relative">
      <p className='text-[#008A96] ambit'>Community of Care</p>
      <hr className='w-[20vw] text-center mx-auto my-4' />
      <h2 className='font-bold text-xl font-serif mt-4 youth sm:text-[40px]'>Inspiring Journeys:</h2>
      <h2 className='font-bold text-xl font-serif youth sm:mt-4 sm:text-[40px]'>Physiotherapy Changed Their Lives</h2>
      <p className='mt-2 ambit sm:text-[18px]'>Hear directly from our satisfied patients in these inspiring video testimonials. Watch them share their</p>
      <p className='ambit sm:text-[18px]'>personal journeys of recovery and transformation through physiotherapy.</p>
      
      <div className='video flex justify-center items-center mt-16'>
        
        {/* Container for the overlay and main image */}
        <div className="relative sm:w-[50vw] text-center">
          {/* Overlay image */}
          <img 
            className='absolute h-[508px] transform -scale-x-100 w-[333px] opacity-50 bottom-10 right-72'
            src="/desine.png" 
            alt="" 
          />
          {/* Main image */}
          <img 
            className='w-full sm:w-[406px] mx-auto relative z-10'
            src="./video/poster.png" 
            alt="poster" 
          />
        </div>
        
        {/* Right side content */}
        <div className="flex gap-4 ml-4">
          <img src="Vector.png" className='h-10' alt="" />
          <img src="Vector.png" className='h-10' alt="" />
        </div>
        
        <div className="rightside text-left mt-2 w-[50vw] hidden sm:block ambit sm:text-[18px]">
          <p>I was struggling with debilitating pain in my feet and back for months. Traditional treatments weren't helping, but the personalized care at Physio Fitness was a game-changer. The physiotherapists took the time to understand my specific needs and developed a tailored treatment plan. After a few weeks, I started to notice a significant improvement. I'm so grateful for the care and support I received from the team at Physio Fitness.</p>
          <p className='font-bold text-[#008A96] text-start mt-6 youth upper'>Truptiben Majethiya</p>
          <p className='text-start ambit sm:text-[18px]'>Condition Cured: severe bilateral plantar fasciitis & Back Pain</p>
        </div>
      </div>
    </div>
  )
}

export default Inspiration;
