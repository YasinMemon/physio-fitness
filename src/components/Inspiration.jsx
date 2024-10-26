import React from 'react'

function Inspiration() {
  return (
    <div>
      <p className='text-[#008A96]'>Community of Care</p>
      <hr className='w-[20vw] text-center mx-auto my-4' />
      <h2 className='font-bold text-xl font-serif mt-4'>Inspiring Journeys:</h2>
      <h2 className='font-bold text-xl font-serif'>Physiotherapy Changed Their Lives</h2>
      <p className='mt-2'>Hear directly from our satisfied patients in these inspiring video testimonials. Watch them share their </p> <p>personal journeys of recovery and transformation through physiotherapy.</p>

      <div className='video flex justify-center items-center mt-16'>
        <div className="leftside sm:w-[50vw] text-center">
            <img 
            className='w-full sm:w-[406px] mx-auto'
            src="./video/poster.png" 
            alt="poster" />
        </div>
        <div className="rightside w-[50vw] hidden sm:block">
            <p>I was struggling with debilitating pain in my feet and back for months. Traditional treatments weren't helping, but the personalized care at Physio Fitness was a game-changer. The physiotherapists took the time to understand my specific needs and developed a tailored treatment plan. After a few weeks, I started to notice a significant improvement. I'm so grateful for the care and support I received from the team at Physio Fitness.</p>
            <p className='font-bold text-[#008A96] text-start mt-6'>truptiben Majethiya</p>
            <p className='text-start'>Condition Cured: severe bilateral plantar fasciitis & Back Pain</p>
        </div>
      </div>
    </div>
  )
}

export default Inspiration
