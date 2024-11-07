import React from 'react'

function Trust() {
  return (
    <div className='bg-[#0F7078] overflow-x-hidden mt-14 rounded-xl text-white px-2 sm:px-0 ambit'>
      <h1 className='text-xl font-bold youth pt-14 text-white sm:text-[40px] sm:leading-[45px] capitalize'>Why We're Your Trusted Choice <br /> for Physiotherapy treatments?</h1>
      <p className='text-white my-4 ambit sm:text-[18px] leading-[30px]'>Choose Physio Fitness for personalized care and expert guidance. Our team of <br />experienced therapists is dedicated to your recovery and success.</p>
      <hr />
      <div className="counters text-white flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 font-bold py-8">
        <div>
            <span className='text-6xl youth text-white'>15+</span>
            <p className=' text-white'>years of Excellence</p>
        </div>
        <div>
            <span className='text-6xl  text-white youth'>8+</span>
            <p className=' text-white'>Qualified Doctors</p>
        </div>
        <div>
            <span className='text-6xl  text-white youth'>600+</span>
            <p className=' text-white'>Satisfied Patients</p>
        </div>
        <div>
            <span className='text-6xl  text-white youth'>10+</span>
            <p className=' text-white'>Advanced Machines</p>
        </div>
        <div>
            <span className='text-6xl youth text-white'>95%</span>
            <p className=' text-white '> Reduction in Pain</p>
        </div>
      </div>
    </div>
  )
}

export default Trust
