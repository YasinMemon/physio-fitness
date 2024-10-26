import React from 'react'

function Consultation() {
  return (
    <div className='mt-20 flex sm:px-10 gap-4 sm:gap-10 sm:flex-row flex-col justify-center items-center'>
      <div className="leftside font-bold sm:w-[50vw] text-start">
        <p className='text-[#008A96]'>Our Effective Treatments</p>
        <h1 className='text-2xl'>wide range of  our  physiotherapy treatments, Find the right treatment for you.</h1>
      </div>
      <div className="rightside sm:w-[50vw] text-start">
        <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
        </p>
        <button className='bg-[#008A96] px-6 py-1 text-white rounded-full mt-4'>Schedule Consultation</button>
      </div>
    </div>
  )
}

export default Consultation