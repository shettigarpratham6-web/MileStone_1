"use client";
import React, { useState } from "react";
export default function Addtocart() {
  const [showDesert, setShowDesert] = useState(false);
  const mainItems = [
    {
      id: 1,
      name: "Grilled Salmon",
      image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2019/5/17/0/FNK_PAN-FRIED-SALMON-H_s4x3.jpg",
      price: "$18.99",
      rating: "★★★★☆",
    },
    {
      id: 2,
      name: "Crispy Pangasius",
      image: "https://i.ytimg.com/vi/W5jAeb9vJEY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBx6c5AITnRGVUNmoRggGKELhyZQ",
      price: "$15.50",
      rating: "★★★★★",
    },
    {
      id: 3,
      name: "Stuffed Clams",
      image: "https://static01.nyt.com/images/2023/12/14/multimedia/14SEVEN-FISHESrex3-baked-stuffed-clams-lpzk/14SEVEN-FISHESrex3-baked-stuffed-clams-lpzk-threeByTwoLargeAt2X.jpg",
      price: "$12.75",
      rating: "★★★★☆",
    },
    {
      id: 4,
      name: "Cajun Red Crab",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pU2q-d7XTImiiDZBZjAobLwJ9i1dDvCBnA&s",
      price: "$21.40",
      rating: "★★★★★",
    },
    {
      id: 5,
      name: "Lobster Deluxe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXK_gSrB51wqcrN1ii7Ahg0VkLtjLnQZajgQ&s",
      price: "$25.99",
      rating: "★★★★☆",
    },
    {
      id: 6,
      name: "Garlic Squid",
      image: "https://www.cookedandloved.com/wp-content/uploads/2019/07/garlic-squid-feature.jpg",
      price: "$17.25",
      rating: "★★★★★",
    },
  ];
  const desertItems = [
    {
      id: 7,
      name: "Chocolate Lava Cake",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfmBeU8HI_JUZbSeiz19KfiegsL-x8laisg&s",
      price: "$8.50",
      rating: "★★★★★",
    },
    {
      id: 8,
      name: "Strawberry Cheesecake",
      image: "https://nombeah.com/wp-content/uploads/2023/12/IMG_9498-500x500.jpg",
      price: "$9.20",
      rating: "★★★★☆",
    },
    {
      id: 9,
      name: "Tiramisu Delight",
      image: "https://static.toiimg.com/thumb/84786580.cms?width=1200&height=900",
      price: "$7.75",
      rating: "★★★★★",
    },
    {
      id: 10,
      name: "Caramel Pudding",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkYVMN_ziVzwSU9YCbRsZKIMi72OKmIIykQ&s",
      price: "$6.99",
      rating: "★★★★☆",
    },
  ];
  const displayedItems = showDesert ? desertItems : mainItems;
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 py-16 gap-12 transition">
      <div className="flex gap-6 mb-8">
        <button
          onClick={() => setShowDesert(false)}
          className="py-2 px-6 rounded-full font-medium text-white transition-transform bg-[#7B654E] hover:scale-105"
        >
          Main Dishes
        </button>
        <button
          onClick={() => setShowDesert(true)}
          className="py-2 px-6 rounded-full font-medium text-white transition-transform bg-gray-400 hover:bg-[#7B654E]"
        >
          Desserts
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="w-80 p-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-[40px] text-center shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 dark:text-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-2xl mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {item.name}
            </h3>
            <p className="text-lg font-medium text-green-700 dark:text-green-400 mb-1">
              {item.price}
            </p>
            <p className="text-yellow-400 mb-5 text-xl">
              {item.rating}
            </p>
            <button
              className="bg-[#7B654E] text-white font-medium py-2 px-6 rounded-full hover:bg-[#5c4a38] transition-transform hover:scale-105"
              onClick={() =>
                alert(`${item.name} successfully added to cart!`)
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
