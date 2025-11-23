"use client";
import React from "react";
export default function Banner() {
  return (
    <div>
    <div className="flex flex-col sm:flex-row w-full sm:h-svh  bg-black  ">
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"
        alt="Banner"
        className="items-center-safe mt-10 ml-20 h-96"
      />
      <div className="flex flex-col gap-4">
      <h1 className="text-2xl sm:text-5xl font-semibold text-white sm:mt-20 sm:ml-40 ml-5 mt-5">Are you Ready to <br></br> Start your online<br></br>Order?</h1>
      <p className="sm:mt-20 sm:ml-40 mt-5 ml-5">Bndulgence diminution so discovered mr apartments.<br></br> Are off under folly death wrote cause her way spite.<br></br> Plan upon yet way get cold spot its week.,<br></br>Almost do am or limits hearts.<br></br> Resolve parties but why she shewing.She sang know now</p>
<button className="bg-amber-700 flex items-center justify-center gap-2 text-white rounded-3xl w-40 sm:ml-60 ml-20  py-2 hover:bg-amber-800 transition">
  <img
    className="w-5 h-5 "
    src="https://cdn-icons-png.flaticon.com/128/299/299406.png"
    alt="Playstore Icon"
  />
  Playstore
</button>
     </div>
    </div>
    </div>
  );
}
