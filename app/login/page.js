"use client";
import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Bottom from "../bottom/bottom";
import Properties from "../components/react_props";
export default function Login() {
  return (
    <div className="flex flex-col">

      <Properties title="Login Page" text="Login" Img="https://img.freepik.com/premium-photo/dining-black-restaurant-background_87720-45578.jpg" />

      <div className="mt-8 flex flex-col lg:flex-row bg-white items-center">
        <div className="w-full lg:w-1/2">
          <img className="w-full" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75" />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-lg w-full max-w-md mx-auto mt-6 lg:mt-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
            WELCOME BACK
          </h1>
          <h3 className="text-center text-gray-700 font-medium">
            Enter your email and password to continue
          </h3>
          <form className="flex flex-col items-center gap-4 mt-6 w-full">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-black" />
            <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-black" />
            <button type="button" className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
              Login
            </button>
            <h1 className="text-black font-semibold text-lg sm:text-2xl">Or Login With</h1>
            <div className="flex flex-row justify-center gap-6 mt-6">
              <div className="flex flex-row items-center gap-2">
                <img className="w-8 sm:w-10" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
                <h2 className="text-gray-600">Facebook</h2>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img className="w-8 sm:w-10" src="https://cdn-icons-png.flaticon.com/512/733/733579.png" />
                <h2 className="text-gray-600">Twitter</h2>
              </div>
            </div>
            <div className="flex flex-row gap-1 mt-10">
              <p className="text-gray-600 text-sm sm:text-base">Don't have any account?</p>
              <p className="text-red-600 text-sm sm:text-base cursor-pointer">Register Now</p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Bottom />
    </div>
  );
}
