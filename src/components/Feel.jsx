import React, { useState } from "react";

function Feel() {
  const [hoverIndex, setHoverIndex] = useState(null);

  // Data for each card
  const cards = [
    {
      title: "Pain Relief",
      description: "Our expert physiotherapists utilize a variety of techniques to alleviate pain.",
      defaultImg: "/icons/hand.png",
      hoverImg: "/icons/pain.png"
    },
    {
      title: "Faster Recovery",
      description: "Our expert physiotherapists utilize various techniques to accelerate recovery.",
      defaultImg: "/icons/Frame.png",
      hoverImg: "/icons/removed.png"
    },
    {
      title: "Stress Reduction",
      description: "Reduces stress and anxiety, promoting mental and emotional well-being.",
      defaultImg: "/icons/Layer.png",
      hoverImg: "/icons/IMAGE1-removebg-preview.png"
    },
    {
      title: "Improved Posture",
      description: "Corrects postural imbalances and improves overall body alignment.",
      defaultImg: "/icons/some.png",
      hoverImg: "/icons/IMAGE3-removebg-preview.png"
    }
  ];

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <p className="text-[#008A96] text-center text-sm sm:text-base md:text-lg uppercase">
        Your Path to Wellness
      </p>
      <h1 className="font-bold text-center text-[#122235] text-2xl md:text-3xl lg:text-4xl capitalize mt-2 sm:mt-3 md:mt-4 leading-snug sm:leading-normal md:leading-relaxed font-serif">
        Feel Better, Live Better: <br className="hidden sm:block" />
        Explore Benefits of Physiotherapy
      </h1>
      <p className="mt-4 text-[#2F323D] text-center text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
        Take control of your health and well-being with physiotherapy. Our expert therapists can help you feel better, move better, and live a more fulfilling life.
      </p>

      {/* Icons and Benefits Section */}
      <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 my-10">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className="bg-white hover:bg-[#0E2541] overflow-hidden hover:text-white transition-colors duration-300 w-full h-[254px] flex flex-col items-center justify-center cursor-pointer rounded-lg p-8 shadow-lg"
          >
            <img
              src={hoverIndex === index ? card.hoverImg : card.defaultImg}
              alt={card.title}
              className={`mb-4 ${hoverIndex === index ? 'w-[120px] h-[120px]' : 'w-[60px] h-[60px]'}`}
            />
            <p className="text-xl uppercase font-bold mb-2">{card.title}</p>
            <p className="text-center text-sm ">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feel;
