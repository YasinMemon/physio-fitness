import React from 'react'

function Doctors() {
    const doctors = [
        {
            img: './doctors/Urvashi.png',
            name: "Dr. Urvashi Kaneriya",
            degree: "M.P.T. ( Orthopedic & Sports)"
        },
        {
            img: './doctors/Mask group.png',
            name: "Dr. Krishna Sarvaiya",
            degree: "M.P.T. ( Orthopedic & Sports)"
        },
        {
            img: "./doctors/diya.png",
            name: "Dr. Diya Patel",
            degree: "BPT"
        },
        {
            img: "./doctors/keya.png",
            name: "Dr. kEYA vYAS",
            degree: "B.P.T"
        }
    ]
  return (
    // <div className='flex gap-1 sm:gap-10 px-1 sm:px-14 overflow-x-scroll sm:overflow-x-hidden w-full justify-center items-center mt-10'>
    <div className='sm:grid flex sm:overflow-x-hidden overflow-scroll mt-10 sm:grid-cols-4'>    
    {
            doctors.map((doctor) => {
                return <div key={doctor.img} className='rounded-xl sm:text-start text-center px-2 overfosc shrink-0 sm:shrink'>
                    <img 
                    className='w-full sm:w-[392px] h-[300px] rounded-xl'
                    src={doctor.img} 
                    alt={doctor.name || ""} />
                    <p className='font-bold text-lg'>{doctor.name}</p>
                    <p>{doctor.degree}</p>
                </div>
            })
        }
        </div>
        // </div>
  )
}

export default Doctors
