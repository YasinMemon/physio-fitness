import React from 'react'

function Trust() {
  return (
    <div className='bg-[#0F7078] mt-14 rounded-xl text-white px-2 sm:px-0 ambit'>
      <h1 className='text-xl font-bold youth pt-14 text-white sm:text-[40px]'>Why We're Your Trusted Choice <br /> for Physiotherapy treatments?</h1>
      <p className='text-white my-4 ambit sm:text-[18px]'>Choose Physio Fitness for personalized care and expert guidance. Our team of <br />experienced therapists is dedicated to your recovery and success.</p>
      <hr />
      <div className="counters flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 font-bold py-8">
        <div>
            <span className='text-6xl youth'>15+</span>
            <p>years of Excellence</p>
        </div>
        <div>
            <span className='text-6xl'>8+</span>
            <p>Qualified Doctors</p>
        </div>
        <div>
            <span className='text-6xl'>600+</span>
            <p>Satisfied Patients</p>
        </div>
        <div>
            <span className='text-6xl'>10+</span>
            <p>Advanced Machines</p>
        </div>
        <div>
            <span className='text-6xl'>95%</span>
            <p>Reduction in Pain</p>
        </div>
      </div>
    </div>
  )
}

export default Trust
