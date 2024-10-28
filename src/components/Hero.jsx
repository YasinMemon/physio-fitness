import React, { useEffect, useState } from 'react';

function Hero() {
  const imgs = [
    {
      src: './hero/slider.jpeg',
      title: 'Power of Physiotherapy: Simple and Effective Treatments',
      para: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntureos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non',
    },
    {
      src: './hero/Slide2.png',
      title: 'Heal and Move Freely: Personalized Care for You',
      para: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntureos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non',
    },
    {
      src: './hero/Slide3.png',
      title: 'Fun Way to Stay Healthy: Join the Zumba Craze and Get Fit.',
      para: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
    },
  ];

  const [currentIMG, setcurrentIMG] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIMG((prevIDX) => (prevIDX + 1) % imgs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <>
    {/* <div className='bg-black min-h-[100vh] overflow-hidden w-[100%] opacity-50 fixed z-10 top-0'></div> */}
    <div className="overflow-x-hidden">
      {imgs.map((img, index) => (
        <div
          key={img.src}
          style={{
            height: '100vh',
            width: '100%',
            display: currentIMG === index ? 'block' : 'none',
            position: 'relative',
          }}
        >
          <img
            className="object-cover w-full h-full absolute"
            src={img.src}
            alt="Hero"
          />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          {/* Text Overlay */}
          <div className="absolute top-[25%] sm:top-[20%] lg:top-[25%] font-bold left-6 sm:left-12 lg:left-24 w-[80%] sm:w-[60%] lg:w-[40%] text-white space-y-4">
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl leading-tight">
              {img.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              {img.para}
            </p>
            <button className="bg-white text-black font-bold rounded-xl px-6 py-2 mt-4 hover:bg-gray-300 transition-all duration-300">
            <a href="#apointmnt">BOOK APPOINTMENT</a>
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
}

export default Hero;
