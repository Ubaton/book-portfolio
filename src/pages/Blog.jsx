import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto bg-lightblue-500">
      <div className="max-w-[1240px] mx-auto py-8 px-4">
        <h1 className="text-4xl text-brown-500 font-bold mb-6">Blog</h1>

        {/* Add your blog posts here */}
        <div className="flex flex-wrap mx-4 text-brown-900">
          {/* Example Blog Post */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="bg-brown-500 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Blog Post Title</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tristique justo vel accumsan cursus.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="bg-brown-500 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Blog Post Title</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tristique justo vel accumsan cursus.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="bg-brown-500 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Blog Post Title</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tristique justo vel accumsan cursus.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="bg-brown-500 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Blog Post Title</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tristique justo vel accumsan cursus.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="bg-brown-500 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Blog Post Title</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tristique justo vel accumsan cursus.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="bg-brown-500 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Blog Post Title</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tristique justo vel accumsan cursus.
              </p>
            </div>
          </div>

          {/* Add more blog posts as needed */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
