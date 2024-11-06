import React, { useEffect, useState } from 'react';

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

  return <> <div className="overflow-x-hidden transition-transform">
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
          <div className="absolute top-[25%] sm:top-[20%] lg:top-[25%] font-bold left-6 sm:left-12 lg:left-24 w-[80%] sm:w-[60%] lg:w-[40%] text-white space-y-4">
            <h1 className="font-bold text-2xl youth sm:text-4xl lg:text-5xl leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm ambit sm:text-base lg:text-lg leading-relaxed">
              {slide.description}
            </p>
            <button className="bg-white text-black font-bold rounded-full px-6 py-2 mt-4 hover:bg-gray-300 transition-all duration-300">
              <a href="#apointmnt">BOOK APPOINTMENT</a>
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
}

export default HeroTmp;
