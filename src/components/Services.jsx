import React from 'react'

function Services() {
    const services = [
        {
            img: "./services/physiotherapy.png",
            name: "Physiotherapy"
        },
        {
            img: "./services/therapy.png",
            name: "Advanced 4D Spinal decompression therapy"
        },
        {
            img: "./services/BTl Electrotherapy.png",
            name: "BTl Electrotherapy"
        },
        {
            img: "./services/Cold LAser therapy.png",
            name: "Cold LAser therapy with nano current"
        }
    ]
  return (
    <div className='sm:grid flex sm:overflow-hidden overflow-scroll grid-cols-4 gap-5 sm:space-x-10 px-4 sm:px-10 mt-16'>
      {
        services.map((service) => {
            return <div className='shrink-0' key={service.img} >
                <img src={service.img} 
                alt={service.name}
                className='rounded-xl sm:w-[390px] h-[300px]'
                />
                <p className='text-[#0F7078] font-bold text-base'>{service.name}</p>
            </div>
        })
      }
    </div>
  )
}

export default Services
