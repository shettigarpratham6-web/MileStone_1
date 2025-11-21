"use client";
import React from "react";
import Link from "next/link";
export default function Properties({ title, text, Img }) {
    return (
        <div>
            <div className="relative w-full min-h-screen overflow-hidden font-sans">
                <img
                    src={Img}
                    alt="Restaurant background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 text-white flex flex-col">
                    <div className="bg-[#7b5a30] w-full  md:flex justify-between items-center px-4 sm:px-12 py-2 text-xs sm:text-sm">
                        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                            <span>📞 Phone: +4733378901</span>
                            <span>📧 Email: food@restan.com</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <img src="https://flagcdn.com/w20/gb.png" alt="English flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm" />
                            <span className="sm:flex">English</span>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer hover:opacity-80" />
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer hover:opacity-80" />
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer hover:opacity-80" />
                                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer hover:opacity-80" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-12 py-4 sm:py-6 bg-black/60 gap-4 sm:gap-0">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
                                alt="Logo"
                                className="w-24 sm:w-30"
                            />
                        </div>
                        <ul className="flex flex-row md:flex items-center gap-6 sm:gap-10 text-base sm:text-lg font-semibold">
                            <li className="hover:text-yellow-400 cursor-pointer">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="hover:text-yellow-400 cursor-pointer">
                                <Link href="/login">Pages</Link>
                            </li>
                            <li className="hover:text-yellow-400 cursor-pointer">
                                <Link href="/menu">Menu</Link>
                            </li>
                            <li className="hover:text-yellow-400 cursor-pointer">
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className="hover:text-yellow-400 cursor-pointer">
                                <Link href="/shop">Shop</Link>
                            </li>
                        </ul>
                        <div className="hidden md:flex items-center gap-4 sm:gap-6">
                            <div className="relative">
                                <div className="relative bg-white text-black p-2 sm:p-3 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
                                        alt="user"
                                        className="absolute w-5 h-5 sm:w-6 sm:h-6"
                                    />
                                </div>
                                <span className="absolute -top-2 -right-2 bg-[#7b5a30] text-white text-[10px] sm:text-xs px-1 py-[1px] rounded-full">
                                    0
                                </span>
                            </div>
                            <button className="border border-white px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-lg font-semibold hover:bg-white hover:text-black transition">
                                Reservation
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-grow px-4 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-20">
                            {title}
                        </h1>
                        <div className="flex items-center gap-2 mt-4 text-base sm:text-lg sm:gap-5">
                            <Link href="/" className="text-white/80">Home</Link>
                            
                            <span className="text-yellow-400 font-semibold">{text}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
