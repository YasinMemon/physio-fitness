import React from 'react'

function Experts() {
  return (
    <div className='mt-20 flex sm:px-10 gap-4 sm:gap-10 sm:flex-row flex-col justify-center items-center'>
      <div className="leftside font-bold sm:w-[50vw] text-start">
        <p className='text-[#008A96] ambit'>Guide to Well-being</p>
        <h1 className='text-2xl youth sm:text-[40px]'>Expert Tips and Advice
        Health and Wellness Guide by Physio-Fitness</h1>
      </div>
      <div className="rightside sm:w-[50vw] text-start ambit sm:text-[18px]">
        <p>
        Get expert advice on health and wellness from our team of skilled physiotherapists. Discover valuable tips and insights to improve your overall well-being.
        </p>
        <button className='bg-[#008A96] px-6 py-1 text-white rounded-full mt-4'> <a href="#apointmnt"> Get Expert Advice</a></button>
      </div>
    </div>
  )
}

export default Experts
