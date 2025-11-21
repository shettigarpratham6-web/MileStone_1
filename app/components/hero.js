"use client";
import React from "react";
export default function Hero() {
  const handleClick = () => {
    alert("Table booked");
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900 transition">
      <div className="flex items-center justify-center w-full md:w-1/2 p-6 ">
        <div className="w-full max-w-sm ">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
            Book a table
          </h2>
          <input
            type="text"
            placeholder="Phone"
            className="w-full border rounded-md px-4 py-3 mb-4 text-black dark:text-white dark:bg-gray-800 dark:border-gray-700"
          />
          <select className="w-full border rounded-md px-4 py-3 mb-4 text-black dark:text-white dark:bg-gray-800 dark:border-gray-700">
            <option>1 Person</option>
            <option>2 Person</option>
            <option>3 Person</option>
            <option>4 Person</option>
          </select>
          <input
            type="date"
            className="w-full border rounded-md px-4 py-3 mb-4 text-black dark:text-white dark:bg-gray-800 dark:border-gray-700"
          />
          <select className="w-full border rounded-md px-4 py-3 mb-6 text-black dark:text-white dark:bg-gray-800 dark:border-gray-700">
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
          </select>
          <button
            className="w-full bg-[#7B654E] text-white font-semibold py-3 rounded-md hover:bg-[#6a543f]"
            onClick={handleClick}
          >
            Book A Table
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 py-10 text-center">
        <h2 className="text-gray-700 dark:text-gray-200 text-3xl font-bold mb-8">
          Our Popular Category
        </h2>
        <div className="flex justify-center gap-4">
          <div className="hover:-translate-y-5 w-40 rounded-lg overflow-hidden shadow-md transition">
            <div className="relative">
              <img
                src="https://pastrychefonline.com/wp-content/uploads/2015/01/hot-chocolate-with-marshmallows1.jpg"
                className="w-full h-48 object-cover"
                alt="Hot Chocolate"
              />
              <div className="absolute bottom-0 left-0 right-0 text-left p-2 bg-black/50">
                <p className="text-xs text-yellow-300 font-semibold">Beverage</p>
                <h3 className="text-white text-sm font-bold">Hot Chocolate</h3>
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-5 w-40 rounded-lg overflow-hidden shadow-md transition">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EuVYEm22v_-iy2vFQ-4niAT7Dk4uzs_CYA&s"
                className="w-full h-48 object-cover"
                alt="Chicken Alfredo"
              />
              <div className="absolute bottom-0 left-0 right-0 text-left p-2 bg-black/50">
                <p className="text-xs text-yellow-300 font-semibold">Main Dishes</p>
                <h3 className="text-white text-sm font-bold">Chicken Alfredo</h3>
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-5 w-40 rounded-lg overflow-hidden shadow-md transition">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLcX5NeFrqrgb6Y7XRZ4loW2X7xhlRn56Tw&s"
                className="w-full h-48 object-cover"
                alt="Cheesecakes"
              />
              <div className="absolute bottom-0 left-0 right-0 text-left p-2 bg-black/50">
                <p className="text-xs text-yellow-300 font-semibold">Desserts</p>
                <h3 className="text-white text-sm font-bold">Cheesecakes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
