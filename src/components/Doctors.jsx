import React, { useState } from "react";

function Doctors() {
  const doctors = [
    {
      img: "./doctors/Urvashi.png",
      name: "Dr. Urvashi Kaneriya",
      degree: "M.P.T. ( Orthopedic & Sports)",
      details:
        "Dr. Urvashi specializes in orthopedic and sports physiotherapy with over 10 years of experience. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit et sed, rerum exercitationem consectetur aspernatur velit repellat dolor. Quos modi provident tempora dolores quas, cupiditate exercitationem obcaecati eaque veniam distinctio?",
    },
    {
      img: "./doctors/Mask group.png",
      name: "Dr. Krishna Sarvaiya",
      degree: "M.P.T. ( Orthopedic & Sports)",
      details:
        "Dr. Krishna has extensive experience in sports-related injuries and rehabilitation. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut maiores deserunt itaque obcaecati quas nisi fugit dolorum in impedit voluptatum, illum consequatur possimus quae laudantium pariatur dolore ullam. Molestiae.",
    },
    {
      img: "./doctors/diya.png",
      name: "Dr. Diya Patel",
      degree: "BPT",
      details:
        "Dr. Diya is skilled in physiotherapy treatments focusing on pain management and recovery. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias quo enim expedita dolores magni itaque totam sint sequi, libero ipsam perferendis autem quisquam consectetur facere nam quam provident dolorem.",
    },
    {
      img: "./doctors/keya.png",
      name: "Dr. Keya Vyas",
      degree: "B.P.T",
      details:
        "Dr. Keya has a special interest in pediatric physiotherapy and holistic wellness. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sunt soluta, animi asperiores obcaecati tempore laboriosam placeat? Quidem rem laborum necessitatibus expedita, nostrum sit, beatae quasi earum velit a nihil?",
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const showDetails = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeDetails = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="flex flex-col items-center w-full mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full">
        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            onClick={() => showDetails(doctor)}
            className="cursor-pointer rounded-lg shadow-lg p-4 text-center transform hover:scale-105 transition duration-200"
          >
            <img
              className="w-full h-60 object-cover rounded-lg mb-4"
              src={doctor.img}
              alt={doctor.name}
            />
            <p className="font-bold text-lg">{doctor.name}</p>
            <p className="text-sm text-gray-600">{doctor.degree}</p>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
            <button
              onClick={closeDetails}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <img
              className="w-full h-60 object-cover rounded-lg mb-4"
              src={selectedDoctor.img}
              alt={selectedDoctor.name}
            />
            <p className="font-bold text-xl mb-2">{selectedDoctor.name}</p>
            <p className="text-sm text-gray-600 mb-4">{selectedDoctor.degree}</p>
            <p className="text-gray-700">{selectedDoctor.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Doctors;
