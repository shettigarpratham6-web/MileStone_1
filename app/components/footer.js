"use client";
import React from "react";
export default function Footer() {
  return (
    <div className="bg-white">
      <div className="bg-black text-white py-12 px-6 sm:px-20 p-6   w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10  bg-black ">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-6">
              Continued at zealously necessary is Surrounded sir motionless she end
              literature. Gay direction neglected.
            </p>
            <div className="flex gap-3">
              <div className="bg-gray-800 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6422/6422199.png"
                  alt="icon"
                  className="w-5 h-5"
                />
              </div>

              <div className="bg-gray-800 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6422/6422210.png"
                  alt="icon"
                  className="w-5 h-5"
                />
              </div>
              <div className="bg-gray-800 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6422/6422215.png"
                  alt="icon"
                  className="w-5 h-5"
                />
              </div>
              <div className="bg-gray-800 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6422/6422202.png"
                  alt="icon"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Company Profile</li>
              <li>About</li>
              <li>Help Center</li>
              <li>Career</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <p>175 10th Street, Office 375 Berlin, De 21562</p>
              <p>+123 34598768</p>
              <p>food@restan.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Join our subscribers list to get the latest news and offers.
            </p>
            <div className="flex items-center border-b border-gray-600 pb-2 mb-3">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent outline-none flex-1 text-gray-300"
              />
              <button className="text-[#7B654E]">send</button>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <input type="checkbox" className="mr-2" />
              <label>I agree to the Privacy Policy</label>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 text-sm">
          © 2025 Restan. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
