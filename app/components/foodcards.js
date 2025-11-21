"use client";
import React from "react";
export default function Foodcards() {
  return (
    <div className="flex justify-center flex-col md:flex-row items-center gap-8 py-10 bg-white dark:bg-gray-900 px-4 transition">
      <div className="w-full sm:w-72 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl text-center shadow-md hover:shadow-lg transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
          alt="Quality Foods"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Quality Foods</h3>
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Quality Foods is dedicated to delivering exceptional taste and freshness. Every dish is prepared with high-grade ingredients.
        </p>
      </div>
      <div className="w-full sm:w-72 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl text-center shadow-md hover:shadow-lg transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/859/859293.png"
          alt="Fast Delivery"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Fast Delivery</h3>
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Our fast delivery ensures your favorite dishes reach you fresh and on time, maintaining perfect taste and temperature.
        </p>
      </div>
      <div className="w-full sm:w-72 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl text-center shadow-md hover:shadow-lg transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"
          alt="Delicious Recipes"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Delicious Recipes</h3>
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Discover a world of delicious recipes made from authentic ingredients and timeless techniques — where every dish tells a story of taste and tradition.
        </p>
      </div>
    </div>
  );
}
