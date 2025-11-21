"use client";
import React from "react";
export default function Cheflist() {
  return (
    <div className="w-full h-full">
      <div className="bg-[#ebe9e6] text-center py-6">
        <p className="text-[#826a45] text-3xl font-semibold font-serif">MASTER CHEFS</p>
        <p className="text-black text-5xl font-semibold font-serif mt-6">Meet Our Special Chefs</p>
      </div>
      <div className="bg-[#ebe9e6] flex flex-col sm:flex-row justify-center w-full h-full gap-20 py-10 ">
        <div className="relative mt-5 flex flex-col items-center ">
          <div className="relative border-2 rounded-full w-80 h-80 border-gray-600 flex items-center justify-center overflow-hidden">
            <div className="border-2 rounded-full w-72 h-72 border-gray-400 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=1920&q=75"
              />
            </div>
          </div>
          <div className="absolute top-[265px] w-[330px] text-center text-white bg-[#826a45] h-[72px] 
                      z-20 transition-transform duration-300 hover:scale-110 rounded-md">
            <h2 className="text-lg font-semibold leading-tight mt-2">Alexander Petllo</h2>
            <p className="text-xs tracking-wide">ASSISTANT CHEF</p>
          </div>
        </div>
        <div className="relative mt-5 flex flex-col items-center">
          <div className="border-2 rounded-full w-80 h-80 border-gray-600 flex items-center justify-center overflow-hidden">
            <div className="border-2 rounded-full w-72 h-72 border-gray-400 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=1920&q=75"
              />
            </div>
          </div>
          <div className="absolute top-[265px] w-[330px] text-center text-white bg-[#826a45] h-[72px]
                      z-20 transition-transform duration-300 hover:scale-110 rounded-md">
            <h2 className="text-lg font-semibold leading-tight mt-2">Mendia Juxef</h2>
            <p className="text-xs tracking-wide">BURGER KING</p>
          </div>
        </div>
        <div className="relative mt-5 flex flex-col items-center">
          <div className="border-2 rounded-full w-80 h-80 border-gray-600 flex items-center justify-center overflow-hidden">
            <div className="border-2 rounded-full w-72 h-72 border-gray-400 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=1920&q=75"
              />
            </div>
          </div>
          <div className="absolute top-[265px] w-[330px] text-center text-white bg-[#826a45] h-[72px]
                      z-20 transition-transform duration-300 hover:scale-110 rounded-md">
            <h2 className="text-lg font-semibold leading-tight mt-2">Petro William</h2>
            <p className="text-xs tracking-wide">MAIN CHEF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
