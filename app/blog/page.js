"use client";
import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Bottom from "../bottom/bottom";
import Properties from "../components/react_props";
export default function Blog() {
  return (
    <div className="flex flex-col bg-white">
       <Properties title="Blog Standard" text="blog-standard" Img="https://www.creativefabrica.com/wp-content/uploads/2023/09/03/Restaurant-Background-Graphics-78429994-1.jpg" />
      <div className="flex flex-col space-y-10 sm:space-y-12 px-4 sm:px-8 md:px-12 py-10 sm:py-16 dark:bg-gray-400">
        {[1, 2, 3].map((item) => (
          <div key={item} className="relative dark:bg-gray-700 bg-white rounded-lg shadow-lg overflow-hidden w-full
          max-w-3xl mx-auto">  
            <img className="w-full rounded-t-lg h-48 sm:h-64 md:h-72 object-cover"
              src={`https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F${item}-full.jpg&w=3840&q=75`}
            />
            <div className="p-4 sm:p-6">
              <p className="text-gray-700 dark:text-white text-sm sm:text-base text-justify">
                Blog contents
              </p>
              <button className="mt-4 px-4 sm:px-6 py-2 bg-[#7b5a30] text-white rounded hover:bg-[#604428] transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <Bottom/>
    </div>
  );
}
