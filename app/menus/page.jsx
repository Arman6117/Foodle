"use client";
import MenuCard from "@/components/MenuCard";
import Image from "next/image";
import React from "react";
import HeroImage from "../../public/assets/Hero_image1.png"
import Burger from '../../public/assets/Burger.png'
const page = () => {
  return (
    <div className="h-screen  ">
     <Image
          alt="hero image"
          src={HeroImage}
          className=" h-[60rem] -z-10 opacity-5  object-contain absolute  "
        />
     <Image
          alt="hero image"
          src={Burger}
          className=" h-[60rem] -z-10 opacity-5  object-contain absolute top-[60rem]  "
        />

      <div className="flex bg-redPrimary p-4">
        <h1 className="text-6xl text-white font-bold  ml-10">Menu</h1>
      </div>
      <div className="flex flex-wrap ml-10 gap-36 mt-20    ">
        <MenuCard foodItem="Chicken Burger" foodItemPrice={109} />
        <MenuCard foodItem="Pizza" foodItemPrice={219} />
        <MenuCard foodItem="French Fries" foodItemPrice={129} />
        <MenuCard foodItem="Chicken Fry" foodItemPrice={120} />
        <MenuCard foodItem="Grill Sandwich" foodItemPrice={109} />
        <MenuCard foodItem="Noddle's Ramen" foodItemPrice={119} />
        <MenuCard foodItem="Chocolate Shake" foodItemPrice={99} />
        <MenuCard foodItem="Hotdog" foodItemPrice={99} />
        <MenuCard foodItem="Donut" foodItemPrice={79} />
        <MenuCard foodItem="Chocolate Ice-cream" foodItemPrice={79} />
        <MenuCard foodItem="Sandwich" foodItemPrice={99} />
        <MenuCard foodItem="Hamburger" foodItemPrice={130} />
      </div>
    </div>
  );
};

export default page;
