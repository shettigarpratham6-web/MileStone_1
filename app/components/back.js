"use client";
import React from "react";
import Link from "next/link";
export default function Back() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="	https://restan-nextjs.vercel.app/assets/img/banner/14.jpg"
        alt="Restaurant background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 text-white px-4 sm:px-12 py-6 flex flex-col">
        <div className="hidden lg:flex flex-row items-center justify-between text-sm">
          <ul className="flex gap-8">
            <li className="hover:text-yellow-400 cursor-pointer">
              Phone: +4733378901
            </li>
            <li className="hover:text-red-400 cursor-pointer">
              Email: food@restan.com
            </li>
          </ul>
          <ul className="flex gap-8">
            <li className="hover:text-yellow-400 cursor-pointer">
              175 10h Street, Office 375 Berlin, De 21562
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-4">
          <ul className="flex flex-wrap gap-4 sm:gap-8 text-lg font-semibold justify-center">
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-red-400 cursor-pointer">
              <Link href="/login">Pages</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
          </ul>
          <ul className="flex flex-wrap gap-4 sm:gap-8 text-lg font-semibold justify-center">
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-red-400 cursor-pointer">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <br></br>
        <hr></hr>
        <div className="flex flex-col items-center justify-center mt-10 text-center px-2">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="Logo"
            className="w-32 sm:w-40 md:w-48"
          />
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mt-10">
            Best Restaurant
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-md">
            Best Food Since 1865
          </p>
        </div>
      </div>
    </div>
  );
}
