import Image from "next/image";
import React from "react";
import HeroImage from "../public/assets/Hero_image1.png";
import { TbArrowLoopRight, TbShoppingBag } from "react-icons/tb/index.esm";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="pt-2   px-7 md:px-14 font-baloo flex flex-col gap-12 ">
        {/* <div className="h-15 w-15 bg-black" /> */}
        <span className="  " />

        <h1 className="text-red pseudo z-10   font-bold text-3xl  md:text-5xl pointer-events-none">
          All Fast Food is <br /> Available At Foodle
        </h1>
        <p className=" text-gray-600 text-sm bottom-[18rem] flex gap-3">
          <TbShoppingBag className="mt-1 text-white text-xs h-8 w-8 p-1 rounded-full bg-redPrimary" />{" "}
          We Are Just Click Away When You <br /> Crave For Delicious Food
        </p>
        <div className="flex  space-x-5  bottom-44 font-bold ">
          <button className="text-white flex gap-2 px-3 py-2 bg-redPrimary rounded-full">
            <TbShoppingBag className="icon" />
            Buy Now
          </button>
        </div>
       
     
      </div>
      <Image
          alt="hero image"
          src={HeroImage}
          className=" h-[430px] z-0   object-contain absolute left-64 rotate-3 bottom-20 "
        />
    </div>
  );
};

export default Home;
