import React, { useEffect, useState } from "react";
import "./Doctors.css";
import { data } from "autoprefixer";


function DR() {
  const [doctors, setdoctors] = useState([]);
  useEffect(() => {
    const getDoctorst = async () => {
      try {
        await fetch("https://physiofitnessrajkot.com/api/team-member")
          .then((res) => res.json())
          .then((data) => {
            setdoctors(data);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    getDoctorst();
  }, []);

  // const doctors = [
  //     {
  //         img: "./doctors/Urvashi.png",
  //         name: "Dr. Urvashi Kaneriya",
  //         degree: "M.P.T. (Orthopedic & Sports)",
  //         details:
  //             "Dr. Urvashi specializes in orthopedic and sports physiotherapy with over 10 years of experience.",
  //     },
  //     {
  //         img: "./doctors/Mask group.png",
  //         name: "Dr. Krishna Sarvaiya",
  //         degree: "M.P.T. (Orthopedic & Sports)",
  //         details:
  //             "Dr. Krishna has extensive experience in sports-related injuries and rehabilitation.",
  //     },
  //     {
  //         img: "./doctors/diya.png",
  //         name: "Dr. Diya Patel",
  //         degree: "BPT",
  //         details:
  //             "Dr. Diya is skilled in physiotherapy treatments focusing on pain management and recovery.",
  //     },
  //     {
  //         img: "./doctors/keya.png",
  //         name: "Dr. Keya Vyas",
  //         degree: "B.P.T",
  //         details:
  //             "Dr. Keya has a special interest in pediatric physiotherapy and holistic wellness.",
  //     },
  // ];

  return (
    <div className="doctors-container flex flex-wrap justify-left gap-6 mt-10 mx-auto">
      {doctors.map((dr, index) => (
        <div
          key={index}
          className="mainContainer cursor-pointer h-[320px] overflow-hidden w-[250px]"
        >
          <div className="card-main w-[100%] h-[100%]">
            <div className="card-front flex flex-col items-start text-left">
              <img
                className="h-[40vh] object-cover"
                src={dr.image}
                alt={`Image of ${dr.name}`}
              />
              <div className=''>
              <p className="font-bold mt-2 youth text-left">{dr.name}</p>
              <p className="ambit text-left">{dr.designation}</p>
              </div>
            </div>
            <div className="card-back text-white sm:text-[14px] bg-[#008A96]  rounded-xl w-[100%] h-[100%]  items-center flex-col  justify-center ">
              <div>
                <p className="ambit mt-8">{dr.description}</p>
              </div>
              <hr className="w-full mt-4" />
              <div className="">
                <p className="font-bold">{dr.name}</p>
              </div>
              <div>
                <p>{dr.designation}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DR;
