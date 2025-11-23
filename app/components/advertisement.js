"use client";
import React from "react";
export default function Advertisement() {
  return (
    <div className=" relative bg-gradient-to-br from-amber-400 to-amber-700 w-full h-full p-4 flex flex-col sm:flex-row ">
  <div>
      <div className="h-24 w-24 sm:h-32 sm:w-32 ml-0 sm:ml-20 overflow-hidden  ">
    <img
      className="h-full w-full object-cover"
      src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75"
    />
  </div>
<div className="relative h-32 w-32 sm:h-96 sm:w-96 p-0 sm:p-20 rounded-full 
                ml-0 sm:ml-60 overflow-hidden">

  <img
    className="h-full w-full object-cover"
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
  />

  <div className="absolute overflow-hidden top-10 left-10 bg-white/70 rounded-full
                  w-14 h-14 sm:w-28 sm:h-28 flex flex-col items-center justify-center
                  border-2 border-dotted border-amber-600">
    <span className="text-sm sm:text-lg font-semibold text-black">Save</span>
    <span className="text-sm sm:text-3xl font-bold text-black">55%</span>
  </div>

</div>

   <div className="h-40 w-40  ml-20 overflow-hidden ">
    <img
      className="h-full w-full "
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"
    />
  </div>
</div>
<div className="sm:ml-40 ml-2">
  <h1 className="text-black text-sm sm:text-2xl mt-8 font-mono flex flex-row gap-5">Today Special Offer<img className="w-10  h-8" src="https://cdn-icons-png.flaticon.com/128/664/664866.png"></img></h1>
  <p className="text-black text-3xl sm:text-5xl mt-10 font-semibold  font-mono">Explore <br></br> Irresistible<br></br>Promotions!</p>
  <p className="text-black  mt-8 font-normal font-serif">Contrasted dissimilar get joy you instrument out reasonably.<br></br> Again keeps at no meant stuff. To perpetual do existence<br></br>northward as difficult preserved daughters. Continued at up<br></br> to zealously necessary.</p>
  <button className="w-40 h-10 rounded-3xl font-semibold mt-8 text-white bg-[#826a45]">Order Today</button>
</div>
</div>
  );
}
