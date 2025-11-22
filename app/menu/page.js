"use client";
import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Bottom from "../bottom/bottom";
import Properties from "../components/react_props";
export default function Menu() {
  const foodItems = [
    { img: "https://www.tasteofhome.com/wp-content/uploads/2024/09/Cook-Burgers-on-the-Stove-FT24_277152_EC_0904_1-vert-social.jpg", name: "Burger", price: 6.99 },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrg9C8UysMJZr-ebEXuhesgKPg6QFOklWv6A&s", name: "Pepperoni Pizza", price: 11.49 },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGj5fp8DwKOgB02Y1w-suEvsEg_E0eYYdO_A&s", name: "Pasta", price: 9.29 },
    { img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/2/23/FNK_Indian-Fried-Chicken_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1677264108617.webp", name: "Fried Chicken", price: 7.99 },
    { img: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg", name: "Tacos", price: 8.99 },
    { img: "https://cdn.theliveinkitchen.com/wp-content/uploads/2014/11/26130432/Gloriously-Healthy-Green-Salad-with-Sriracha-Peanut-Dressing-The-Live-In-Kitchen-Featured.png", name: "Healthy Salad", price: 5.49 },
    { img: "https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1662474181&s=15046582e76b761a200998df2dcad0fd", name: "French Fries", price: 3.49 },
    { img: "https://thumbs.dreamstime.com/b/cup-hot-coffee-foam-sharp-focus-foam-coffee-beans-scattered-background-burlap-background-beautiful-light-photo-345328512.jpg", name: "Hot Coffee", price: 2.99 },
  ];
  return (
    <div className="flex flex-col bg-white">
      <Properties title="Food Menu" text="food-menu" Img="https://t3.ftcdn.net/jpg/05/79/48/54/360_F_579485400_8jSrBgNQP1BWUOjWujmRS79YJmzQv6fw.jpg"/>
      <div className="text-center mt-16 px-4 ">
        <p className="text-amber-600 text-2xl font-semibold">Category</p>
        <h1 className="text-gray-900 text-5xl mt-5 ">Choose Your Best Food</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-8 bg-white text-gray-900 font-semibold mt-10 dark:bg-black ">
        {foodItems.map((item, index) => (
          <div key={index} className="transform transition duration-500 hover:-translate-y-6 hover:scale-105 ">
            <img className="object-cover w-full h-52 rounded-lg" src={item.img} alt={item.name} />
            <p className="mt-2 dark:text-amber-50">{item.name}</p>
            <p className="text-[#7b5a30]">${item.price}</p>
          </div>
        ))}
      </div>
      <div className="relative w-full h-[60vh] overflow-hidden mt-16">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4i_Ju4PR_rfkvUd91baOC9eCKpDP1o2UAg&s"
          alt="Delivery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-6 text-center">
          <h1 className="text-5xl font-bold mb-3">30 Minutes Delivery!</h1>
          <p className="max-w-2xl text-lg">
            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
          </p>
        </div>
      </div>
      <Footer />
      <Bottom/>
    </div>
  );
}
