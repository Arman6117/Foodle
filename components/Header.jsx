import Link from "next/link";
import React from "react";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <header className="flex  pl-10 md:px-14 justify-between py-7    font-semibold  ">
      <h1 className="text-black font-bold  text-[20px] font-JanoSans">
        Foodle
      </h1>
      <div className=" flex gap-4 md:gap-8 ">
        <HeaderLinks path="/" link="Home" />
        <HeaderLinks path="/offer" link="Offer" />
        <HeaderLinks path="/service" link="Service" />
        <HeaderLinks path="/Menu" link="Menu" />
        <HeaderLinks path="/About" link="About" />
      </div>
      <div className="flex  gap-x-10 relative z-[1]">
        <button className="text-red/60 hover:text-red transition">Login</button>
        <button className="border-[3px]  text-red/60 w-24 p-1 rounded-full border-[#ea5858]/60 hover:text-white hover:bg-redPrimary hover:border-white transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
