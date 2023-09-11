"use client";
import Link from "next/link";
import React from "react";
import HeaderLinks from "./HeaderLinks";
import { useRouter } from "next/navigation";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
const Header = () => {
  const router = useRouter();

  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <header className="flex   pl-10 md:px-14 justify-between py-7    font-semibold  ">
      <h1 className="text-black font-bold  text-[20px] font-baloo">Foodle</h1>
      <div className=" flex  gap-4 md:gap-8 ">
        <HeaderLinks path="/" link="Home" />
        <HeaderLinks path="/Menu" link="Menu" />
        <HeaderLinks path="/About" link="About" />
      </div>
      <div className="flex mr-5 space-x-2 relative z-[1]">
        {!isSignedIn || !isLoaded ? (
          <div className="mr-1 flex space-x-10">
            <button
              className="text-red/60 hover:text-red transition"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
            <button
              className="border-[3px]  text-red/60 w-24 p-1 rounded-full border-[#ea5858]/60 hover:text-white hover:bg-redPrimary hover:border-white transition"
              onClick={() => router.push("/sign-up")}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex sm:flex-col justify-center group items-center p-1 md:p-0 md:mr-0 ">
          <span className="mr-4 sm:mr-2 sm:mt-9 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity ">{user?.firstName}{' '}{user?.lastName}</span>

            <Image
              src={user.profileImageUrl}
              width={40}
              height={40}
              alt=""
              className="object-contain rounded-full -mt-3 sm:-mt-16 cursor-pointer "
              onClick={() => router.push("/profile")}
            />
          
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
