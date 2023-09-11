"use client";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useRouter } from "next/navigation";
import { useUser, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
const Profile = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <div>
      <div className="flex bg-lightRed/30 p-1  justify-center sm:justify-normal sm:p-0 sm:h-screen ">
        <div className="border-gray-400 sm:border-none w-[90%] sm:w-[30%] sm:bg-redPrimary border-b-2 p-2">
          <div className="flex justify-between ">
            <ArrowLeftIcon
              className="text-gray-500 sm:text-gray-100 h-8 cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            />
            <div className="bg-redPrimary p-1 w-20 flex justify-center rounded-md text-white font-semibold hover:bg-redPrimary/50 transition-all hover:text-black ">
              <SignOutButton />
            </div>
            {/* <span className="font-black text-2xl">My Account</span> */}
          </div>
          <div className="flex">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
