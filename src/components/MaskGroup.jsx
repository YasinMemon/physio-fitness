import React, { useEffect, useState } from 'react';

function MaskGroup() {

  const [blog, setblog] = useState([]);
  useEffect(() => {
 
    const getBlogs = async () => {
        try {
            await fetch('https://physiofitnessrajkot.com/api/blog-list').
            then((res) => res.json()).
            then((data) => {
                console.log(data) 
                setblog(data);
            }
            ).catch((err) => console.log(err)
            )
        } catch (error) {
            console.log(error);
        }
    }

    getBlogs();
},[]);

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
            className="bg-[#0F7078] text-white sm:w-1/2 h-full p-10 overflow-y-auto relative"
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

      <div className="sm:grid relative sm:grid-cols-4 flex sm:overflow-hidden overflow-x-scroll gap-2 justify-center items-center mt-20 mb-10">
        {blog.map((blog, index) => {
        return <>  <img
            key={index}
            onClick={togglePopup}
            className="sm:w-[330px] cursor-pointer transition-transform transform hover:scale-105"
            src={blog.image}
            alt="image not found"
          />
          <p className='absolute left-[8.5rem] text-white text-xl font-bold top-12'>{blog.title}</p>
          <p className='absolute left-[8.5rem] top-[4.5rem]'>{blog.description}</p>
          </> }
        )}
      </div>
    </>
  );
}

export default MaskGroup;
