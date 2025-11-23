"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Bottom from "../bottom/bottom";
import Properties from "../components/react_props";
export default function Shop() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    alert("item added to cart");
  };
  const shopitems = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNTeF8XDkakPpy3titWXK0IzwGxiVvHTttw&s", name: "chicken nuggets", price: "$3" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaF6-1Auf1DuOXo9FhalxTrx1j-BnkoOu4A&s", name: "chicken biryani", price: "$4" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQK9xjuj3qvEApebuLzCsVF3a05QYjUoIwNA&s", name: "chicken alfredo", price: "$5" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7c44FUddbZoN_Hw0ylhvLnScHZbFFU3aQA&s", name: "chicken sandwich", price: "$2" }
  ];
  return (
    <div className="flex flex-col bg-white overflow-x-hidden dark:bg-gradient-to-r dark:from-cyan-900 dark:to-cyan-950 ">
      <Properties title="Special Food" text="shop" Img="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=light-city-restaurant-260922.jpg&fm=jpg" />
      <div className="w-full h-full bg-white dark:bg-gradient-to-r dark:from-cyan-900 dark:to-cyan-950
 ">
        <div className="flex flex-row gap-2 h-52">
          <div className="hidden sm:relative sm:block w-14 ml-10 mt-20 bg-[#826a45] h-14 rounded-2xl">
            <img className="absolute w-10 h-10 ml-2 mt-2 " src="https://cdn-icons-png.flaticon.com/128/9736/9736371.png" />
          </div>
          <div className="hidden sm:relative sm:block w-14 mt-20 bg-gray-400 h-14 rounded-2xl">
            <img className="absolute w-10 h-10 ml-2 mt-2" src="https://cdn-icons-png.flaticon.com/128/3602/3602109.png" />
          </div>
          <div className=" sm:ml-auto ml-10 mt-20 flex flex-col sm:flex-row gap-5">
            <div>
              <p className="text-gray-600 font-mono dark:text-white">Showing 1–8 of 20 results</p>
            </div>
            <div className="border-2 border-gray-800 w-56 h-10 mr-5 transition-colors duration-300 hover:bg-[#826a45]  ">
              <p className="text-gray-950 ml-12 mt-2 hover:text-white ">Short by latest</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 w-full mt-8 ">
          {shopitems.map((item, index) => (
            <div
              key={index}
              className=" p-5 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full sm:w-64 flex flex-col items-center text-center dark:shadow-white"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
              />
              <p className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors duration-300">
                {item.name}
              </p>
              <p className="text-gray-600 text-sm mb-4">₹{item.price}</p>
              <button
                className="px-6 py-2.5 text-black font-semibold rounded-lg shadow-md transition-colors duration-300 hover:bg-[#826a45] hover:text-white"
                onClick={handleClick}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-40 bg-gradient-to-r from-white to-gray-50 flex items-center justify-center gap-6 shadow-md rounded-2xl border border-gray-200 dark:bg-gradient-to-r dark:from-cyan-900 dark:to-cyan-950 ">
        <p className="font-sans text-md sm:text-3xl text-gray-700 tracking-wide dark:text-white">
          Number of items added to cart:
        </p>
        <h1 className="text-2xl sm:text-4xl font-bold text-emerald-600 drop-shadow-sm">
          {count}
        </h1>
      </div>
      <Footer />
      <Bottom />
    </div>
  );
}
