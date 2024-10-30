import React, { useEffect, useState } from "react";

function Services() {

  const [services, setservices] = useState([]);
  useEffect(() => {
    const getServices = async () => {
        try {
            await fetch('https://physiofitnessrajkot.com/api/service-list').
            then((res) => res.json()).
            then((data) => {
                setservices(data);
            }
            ).catch((err) => console.log(err)
            )
        } catch (error) {
            console.log(error);
        }
    }

    getServices();
},[]);
 
// const services = [
  //   {
  //     img: "./services/physiotherapy.png",
  //     name: "Physiotherapy",
  //     description:
  //       "Physiotherapy focuses on promoting mobility, reducing pain, and restoring overall function through personalized treatment plans. Our expert physiotherapists work with patients to address issues such as joint pain, sports injuries, post-surgery rehabilitation, and chronic pain management. Through a combination of exercises, manual therapy, and modern equipment, we aim to enhance your recovery and improve your quality of life.",
  //   },
  //   {
  //     img: "./services/therapy.png",
  //     name: "Advanced 4D Spinal Decompression Therapy",
  //     description:
  //       "The Advanced 4D Spinal Decompression Therapy is designed for individuals with chronic back pain, herniated discs, and sciatica. Utilizing state-of-the-art technology, this therapy gently stretches and decompresses the spine, creating a vacuum effect that allows discs to reposition naturally. It’s a non-surgical, drug-free solution aimed at relieving pressure on spinal nerves, improving mobility, and promoting long-term spinal health.",
  //   },
  //   {
  //     img: "./services/BTl Electrotherapy.png",
  //     name: "BTL Electrotherapy",
  //     description:
  //       "BTL Electrotherapy is an advanced pain relief and muscle rehabilitation treatment that uses electrical impulses to stimulate nerves and muscles. It is ideal for managing pain, treating musculoskeletal injuries, and enhancing muscle function. This therapy also accelerates recovery, reduces inflammation, and improves circulation, making it a popular choice among athletes and patients in post-injury recovery.",
  //   },
  //   {
  //     img: "./services/Cold LAser therapy.png",
  //     name: "Cold Laser Therapy with Nano Current",
  //     description:
  //       "Cold Laser Therapy with Nano Current is a non-invasive treatment that uses low-level lasers and nano-level currents to accelerate tissue repair, reduce inflammation, and relieve pain. It’s particularly effective for treating soft tissue injuries, chronic pain, and inflammation. This cutting-edge therapy works on a cellular level, stimulating cell regeneration and improving overall recovery, making it an excellent choice for patients seeking a natural, painless healing approach.",
  //   },
  // ];

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
          key={service}
          onClick={() => showDetails(service)}
          className="cursor-pointer rounded-lg shadow-lg p-4 text-center transform hover:scale-105 transition duration-200"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <p className="text-[#0F7078] font-bold text-lg youth mb-2">{service.title}</p>
          </div>
        ))}
      </div>

      {selectedService && <>
        <img
              src="/desine.png"
              className="absolute transform -scale-x-100 h-[340px] w-[223px] top-0 right-0 opacity-20"
              alt=""
            />
                    <div className="fixed inset-0 flex justify-end z-50">
          <div
            className="bg-[#0F7078] text-white sm:w-1/2 h-full p-10 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevents closing popup when clicking inside
          >
            <button
              onClick={closeDetails}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <p className="font-bold text-2xl youth mb-4">{selectedService.title}</p>
            <div className="text-left">
            <p className="text-white text-base ambit">{selectedService.description}</p>
            </div>
            <div className="text-left">
            <button
            onClick={closeDetails}
            className="bg-white sm:w-[115px] text-nowrap sm:h-[30px] sm:text-[18px] text-black rounded-full mt-4 font-bold"><a href="#apointmnt">Inqure now</a></button>
            </div>
          </div>
        </div>
        </>}
    </div>
  );
}

export default Services;
