import React from "react";

const Events = () => {
  return (
    <section className="container mx-auto bg-rose-500 py-10">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold text-brown-500 mb-8">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Event Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brown-900 mb-4">
              Event 1
            </h3>
            <p className="text-brown-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio.
            </p>
            <p className="text-gray-500">Date: October 15, 2023</p>
            <p className="text-gray-500">Location: Venue XYZ</p>
          </div>

          {/* Sample Event Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brown-900 mb-4">
              Event 2
            </h3>
            <p className="text-brown-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio.
            </p>
            <p className="text-gray-500">Date: November 5, 2023</p>
            <p className="text-gray-500">Location: Venue ABC</p>
          </div>

          {/* Sample Event Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brown-900 mb-4">
              Event 3
            </h3>
            <p className="text-brown-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio.
            </p>
            <p className="text-gray-500">Date: December 20, 2023</p>
            <p className="text-gray-500">Location: Venue XYZ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
