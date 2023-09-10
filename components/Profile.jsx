"use client";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
const Profile = () => {
  const router = useRouter();
  const {user} = useUser();
  return (
    <div>
      <div className="h-screen w-screen flex items-center justify-center bg-lightRed">
        <div className="h-[90%] w-[90%] bg-white rounded-md shadow-2xl p-5">
          <div className="flex space-x-7 ">
            <ArrowLeftIcon
              className="text-gray-500 h-8 cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            />
            <span className="font-black text-2xl">My Account</span>
          </div>
          <div className="flex">
            <div className="">
            <Image
              src={user.profileImageUrl}
              width={40}
              height={40}
              alt=""
              className="object-contain rounded-full -mt-3 sm:-mt-16 cursor-pointer "
              onClick={() => router.push("/profile")}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
