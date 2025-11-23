"use client";
import Back from "./components/back";
import Hero from "./components/hero";
import Foodcards from "./components/foodcards";
import Addtocart from "./components/carts";
import Footer from "./components/footer";
import Banner from "./components/banner_add";
import Cheflist from "./components/chefs";
import Advertisement from "./components/advertisement";
import Bottom from "./bottom/bottom";
import Video from "./components/video_and_content";
export default function Page() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
      <Back />
      <Hero />   
      <Foodcards />
      <Advertisement/>
      <Addtocart />
      <Banner />
      <Video/>
      <Cheflist />
      <Footer />
      <Bottom/>
      </div>
    </>
  );
}
