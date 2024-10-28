import React from 'react';
import './Doctors.css';

function DR() {
    const doctors = [
        {
            img: "./doctors/Urvashi.png",
            name: "Dr. Urvashi Kaneriya",
            degree: "M.P.T. (Orthopedic & Sports)",
            details:
                "Dr. Urvashi specializes in orthopedic and sports physiotherapy with over 10 years of experience.",
        },
        {
            img: "./doctors/Mask group.png",
            name: "Dr. Krishna Sarvaiya",
            degree: "M.P.T. (Orthopedic & Sports)",
            details:
                "Dr. Krishna has extensive experience in sports-related injuries and rehabilitation.",
        },
        {
            img: "./doctors/diya.png",
            name: "Dr. Diya Patel",
            degree: "BPT",
            details:
                "Dr. Diya is skilled in physiotherapy treatments focusing on pain management and recovery.",
        },
        {
            img: "./doctors/keya.png",
            name: "Dr. Keya Vyas",
            degree: "B.P.T",
            details:
                "Dr. Keya has a special interest in pediatric physiotherapy and holistic wellness.",
        },
    ];

    return (
        <div className="doctors-container flex flex-wrap justify-center gap-6 mt-10 mx-auto">
            {doctors.map((dr, index) => (
                <div key={index} className="mainContainer h-[320px] overflow-hidden w-[250px]">
                    <div className="card-main w-[100%] h-[100%]">
                        <div className="card-front flex flex-col items-center">
                            <img className="h-[40vh] object-cover" src={dr.img} alt={`Image of ${dr.name}`} />
                            <p className="font-bold mt-2">{dr.name}</p>
                            <p>{dr.degree}</p>
                        </div>
                        <div className="card-back w-[100%] h-[100%] flex items-center justify-center p-4">
                            <p>{dr.details}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DR;
