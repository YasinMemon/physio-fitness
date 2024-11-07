import React from 'react'

function Consultation() {
  return (
    <div className='mt-20  flex sm:px-10 gap-4 sm:gap-10 sm:flex-row flex-col overflow-hidden justify-center items-center'>
      <div className="leftside font-bold sm:w-[50vw] text-start ml-10">
        <p className='text-[#008A96] ambit uppercase'>Our Effective Treatments</p>
        <h1 className='text-2xl youth text-[#122235] sm:text-[30px] sm:leading-[45px] font-[500px] capitalize'>wide range of  our  physiotherapy treatments, Find the right treatment for you.</h1>
      </div>
      <div className="rightside sm:w-[50vw] text-start ml-10">
        <p className='ambit sm:text-[18px] sm:text-nowrap  text-[#2F323D]'>
        Whether you're recovering from an injury or simply looking to </p> <p className='ambit sm:text-[18px] sm:text-nowrap'> improve your overall well-being, our personalized approach <br /> ensures that you receive the right treatment at the right time.        </p>
        <button className='bg-[#008A96] w-[256px] h-[56p] px-4 py-1 text-[18px] text-white rounded-full mt-4'> 
        <a href="#apointmnt">Schedule Consultation</a></button>
      </div>
    </div>
  )
}

export default Consultation