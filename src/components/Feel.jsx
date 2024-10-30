import React from 'react'

function Feel() {
    const imgs = [
             "./pain.png", "recovery.png", "stress.png", "improved.png"
    ]
  return (
    <div className='mt-24'>
      <p className='text-[#008A96] youth'>Your Path to Wellness</p>
      <h1 className='font-bold text-base sm:text-3xl font-serif'>Feel better, live Better: <br />
      Explore Benefits of Physiotherapy</h1>
      <p className='mt-2'>Take control of your health and well-being with physiotherapy. Our expert therapists can help you feel <br />better, move better, and live a more fulfilling life.</p>
      <div className='imgs flex mt-10'>
        {
            imgs.map((img) => {
                return <div>
                    <img src={img}  />
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Feel
