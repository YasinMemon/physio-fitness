import React, { useEffect, useState } from 'react';

function MaskGroup() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetch('https://physiofitnessrajkot.com/api/blog-list');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBlogs();
  }, []);

  const togglePopup = () => {
    setShow(!show);
  };

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
    togglePopup();
  };

  const jumpToNextBlog = () => {
    const currentIndex = blogs.findIndex((b) => b.id === selectedBlog.id);
    if (currentIndex < blogs.length - 1) {
      setSelectedBlog(blogs[currentIndex + 1]);
    } else {
      alert('No more blogs available');
    }
  };

  const jumpToPrevBlog = () => {
    const currentIndex = blogs.findIndex((b) => b.id === selectedBlog.id);
    if (currentIndex > 0) {
      setSelectedBlog(blogs[currentIndex - 1]);
    } else {
      alert('No previous blogs available');
    }
  };

  return (
    <>
      {show && selectedBlog && (
        <div
          className="fixed inset-0 flex justify-end z-50"
          onClick={togglePopup}
        >
          <div
            className="bg-[#0F7078] text-white sm:w-1/2 h-full p-10 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/desine.png"
              className="absolute hidden sm:block transform -scale-x-100 h-[340px] w-[223px] top-0 right-0 opacity-20"
              alt=""
            />
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-white"
              onClick={togglePopup}
              aria-label="Close popup"
            >
              &times;
            </button>
            <h1 className="font-bold text-[22px] pb-4 youth">
              {selectedBlog.title}
            </h1>
            <p className="ambit">{selectedBlog.description}</p>
            <div>
              <button
                onClick={jumpToNextBlog}
                className="mt-12 px-6 py-2 bg-white text-[#0F7078] font-bold mr-4 rounded-full"
              >
                Jump To Next Blog
              </button>
              <button
                onClick={jumpToPrevBlog}
                className="mt-6 px-6 py-2 text-white ring-1 ring-white bg-[#0F7078] font-bold rounded-full"
              >
                Jump To Previous Blog
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="sm:grid relative sm:overflow-x-hidden sm:grid-cols-4 flex sm:overflow-hidden overflow-x-scroll gap-2 justify-center items-center mt-20 mb-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(blog)}
            className="cursor-pointer relative overflow-hidden"
          >
            <img
              className="sm:w-[330px] transition-transform transform hover:scale-105"
              src={blog.image}
              alt="Blog"
            />
            <p className="absolute left-[8.5rem] text-white text-xl font-bold top-12">
              {blog.title}
            </p>
            <p className="absolute left-[8.5rem] top-[4.5rem]">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MaskGroup;
