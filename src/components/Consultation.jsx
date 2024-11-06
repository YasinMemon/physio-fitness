import React from 'react'

function Consultation() {
  return (
    <div className='mt-20 flex sm:px-10 gap-4 sm:gap-10 sm:flex-row flex-col justify-center items-center'>
      <div className="leftside font-bold sm:w-[50vw] text-start">
        <p className='text-[#008A96] ambit'>Our Effective Treatments</p>
        <h1 className='text-2xl youth sm:text-[40px] sm:leading-[45px] font-[500px]'>wide range of  our  physiotherapy treatments, Find the right treatment for you.</h1>
      </div>
      <div className="rightside sm:w-[50vw] youth text-start">
        <p className='ambit sm:text-[18px]'>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
        </p>
        <button className='bg-[#008A96] px-6 py-1 text-white rounded-full mt-4'> 
        <a href="#apointmnt">Schedule Consultation</a></button>
      </div>
    </div>
  )
}

export default Consultation