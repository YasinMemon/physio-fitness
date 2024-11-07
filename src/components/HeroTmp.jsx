import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function HeroTmp() {
  const [slides, setSlides] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('https://physiofitnessrajkot.com/api/home-banner');
        const data = await response.json();
        setSlides(data); // Assuming the API response is an array of slides
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return <> <div className="overflow-x-hidden relative transition-transform">
    <div className='absolute w-full text-white z-50'>
    <Navbar/>
    </div>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            height: '100vh',
            width: '100%',
            display: currentSlideIndex === index ? 'block' : 'none',
            position: 'relative',
          }}
        >
          <img
            className="object-cover w-full h-full absolute"
            src={slide.image} // Ensure this matches the key in your API response
            alt="HeroTmp"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          {/* Text Overlay */}
          <div className="absolute top-[25%] sm:top-[20%] overflow-hidden lg:top-[25%] left-6 sm:left-12 lg:left-24 w-[80%] sm:w-[60%] lg:w-[40%] text-white space-y-4">
            <h1 className="font-bold text-white text-2xl youth sm:text-4xl lg:text-5xl leading-tight">
              {slide.title}
            </h1>
            <img className='sm:w-[610px] hidden sm:block h-[10px]' src="/icons/vec.png" alt="" />
            <p className="text-sm sm:text-base ambit lg:text-lg leading-relaxed">
              {slide.description}
            </p>
              <a className='w-[180px] px-4 py-2 text-nowrap absolute bg-white text-[#0E2541] text-[18px] ring-white rounded-full ring-1 ' href="#apointmnt">Book Appointment</a>
          </div>
        </div>
      ))}
    </div>
    </>
}

export default HeroTmp;
