import React, { useState } from "react";

function Services() {
  const services = [
    {
      img: "./services/physiotherapy.png",
      name: "Physiotherapy",
      description:
        "Physiotherapy focuses on promoting mobility, reducing pain, and restoring overall function through personalized treatment plans. Our expert physiotherapists work with patients to address issues such as joint pain, sports injuries, post-surgery rehabilitation, and chronic pain management. Through a combination of exercises, manual therapy, and modern equipment, we aim to enhance your recovery and improve your quality of life.",
    },
    {
      img: "./services/therapy.png",
      name: "Advanced 4D Spinal Decompression Therapy",
      description:
        "The Advanced 4D Spinal Decompression Therapy is designed for individuals with chronic back pain, herniated discs, and sciatica. Utilizing state-of-the-art technology, this therapy gently stretches and decompresses the spine, creating a vacuum effect that allows discs to reposition naturally. It’s a non-surgical, drug-free solution aimed at relieving pressure on spinal nerves, improving mobility, and promoting long-term spinal health.",
    },
    {
      img: "./services/BTl Electrotherapy.png",
      name: "BTL Electrotherapy",
      description:
        "BTL Electrotherapy is an advanced pain relief and muscle rehabilitation treatment that uses electrical impulses to stimulate nerves and muscles. It is ideal for managing pain, treating musculoskeletal injuries, and enhancing muscle function. This therapy also accelerates recovery, reduces inflammation, and improves circulation, making it a popular choice among athletes and patients in post-injury recovery.",
    },
    {
      img: "./services/Cold LAser therapy.png",
      name: "Cold Laser Therapy with Nano Current",
      description:
        "Cold Laser Therapy with Nano Current is a non-invasive treatment that uses low-level lasers and nano-level currents to accelerate tissue repair, reduce inflammation, and relieve pain. It’s particularly effective for treating soft tissue injuries, chronic pain, and inflammation. This cutting-edge therapy works on a cellular level, stimulating cell regeneration and improving overall recovery, making it an excellent choice for patients seeking a natural, painless healing approach.",
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const showDetails = (service) => {
    setSelectedService(service);
  };

  const closeDetails = () => {
    setSelectedService(null);
  };

  return (
    <div className="flex flex-col items-center w-full mt-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
        {services.map((service) => (
          <div
            key={service.name}
            onClick={() => showDetails(service)}
            className="cursor-pointer rounded-lg shadow-lg p-4 text-center transform hover:scale-105 transition duration-200"
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <p className="text-[#0F7078] font-bold text-lg mb-2">{service.name}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
            <button
              onClick={closeDetails}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <img
              className="w-full h-60 object-cover rounded-lg mb-4"
              src={selectedService.img}
              alt={selectedService.name}
            />
            <p className="font-bold text-xl mb-2">{selectedService.name}</p>
            <p className="text-gray-700 text-sm">{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
