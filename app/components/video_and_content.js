"use client";
import React from "react";
export default function Video() {
  return (
    <div className="relative w-full h-screen  bg-white">
      <div className="relative ml-6  mb-10 w-1/2 h-96 ">
        <iframe
          className="absolute object-cover w-full h-full mt-8"
          src="https://www.youtube.com/embed/F3zw1Gvn4Mk"
          title="Mr Fox Restaurant Promo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className="-mr-20 absolute top-1 sm:top-10 right-[-25px] sm:right-[-250px]  sm:w-[420px] bg-white border-2 shadow-xl p-6 flex flex-col gap-4 ">
          <p className="text-4xl font-semibold text-black">Opening Hours</p>
          <p className="font-serif text-black">
            A relaxing and pleasant atmosphere, good jazz, dinner,
            and <br /> cocktails. The Patio Time Bar opens in the center.
          </p>
          <p className="text-lg text-gray-600 leading-7">
            Sunday to Tuesday: 10:00 - 09:00 <br />
            Wednesday to Thursday: 11:30 - 10:30 <br />
            Friday & Saturday: 10:30 - 12:00
          </p>
          <div className="flex items-center gap-4 p-3 rounded-full bg-white ">
            <div className="w-8 h-8 rounded-full bg-[#826a45] flex items-center justify-center">
              <img
                className="w-5 h-5 object-contain"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
              />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Call Anytime</p>
              <p className="text-black text-2xl font-semibold">+964733-378901</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
