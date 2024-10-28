import React, { useState } from 'react';

function MaskGroup() {
  const [show, setShow] = useState(false);

  const togglePopup = () => {
    setShow(!show);
  };

  return (
    <>
      {show && (
        <div
          className="fixed inset-0 flex justify-end z-50"
          onClick={togglePopup}
        >
          <div
            className="bg-[#0F7078] text-white w-1/2 h-full p-10 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevents closing popup when clicking inside
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={togglePopup}
              aria-label="Close popup"
            >
              &times;
            </button>
            <h1 className="font-bold text-2xl pb-4">BTL ELECTROTHERAPY</h1>
            <p>
              Physio Fitness offers BTL Electrotherapy, a cutting-edge treatment that uses electricity to stimulate your body's healing process. It's a safe and effective way to relieve pain, reduce inflammation, improve muscle function, and promote tissue regeneration. Our experienced physiotherapists will tailor your BTL Electrotherapy treatment to your specific needs. Whether you're recovering from an injury, managing chronic pain, or seeking to improve your overall well-being, BTL Electrotherapy can be a valuable tool in your healing journey.
            </p>
            <button className="mt-6 px-6 py-2 bg-white text-[#0F7078] font-bold rounded">Inquire Now</button>
          </div>
        </div>
      )}

      <div className="sm:grid sm:grid-cols-4 flex sm:overflow-hidden overflow-x-scroll gap-2 justify-center items-center mt-20 mb-10">
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            onClick={togglePopup}
            className="sm:w-[330px] cursor-pointer transition-transform transform hover:scale-105"
            src="./spine.png"
            alt={`Spine ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default MaskGroup;
