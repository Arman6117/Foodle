"use client";
import { ArrowCircleRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useRouter } from "next/navigation";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Image from "next/image";
import useFoodItemStore from "@/utils/store";
import { createApi } from "unsplash-js";
import OrderCard from "./OrderCard";
const Profile = () => {
  const router = useRouter();
  const { user } = useUser();
  const id = user?.id;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`/api/orders/${id}`);
      const data = await response.json();

      setOrders(data);
    };

    if (id) fetchOrders();
  }, [id]);

  return (
    <div>
      <div className="flex bg-lightRed/30 p-1  justify-center sm:justify-normal sm:p-0 sm:h-screen  ">
        <div className="border-gray-400 sm:border-none w-[90%] sm:w-[30%] sm:bg-redPrimary border-b-2 p-2">
          <div className="flex items-center justify-between sm:flex-col ">
            <ArrowLeftIcon
              className="text-gray-500 sm:text-gray-100 h-8 cursor-pointer sm:mr-32 float-left md:mr-52"
              onClick={() => {
                router.push("/");
              }}
            />
            <div className="mt-9 hidden sm:inline space-y-5 ">
              <Image
                src={user?.profileImageUrl}
                width={130}
                height={130}
                alt="profile image"
                className="object-contain rounded-full md:h-[180px] md:w-[180px] sm:h-[150px] sm:w-[150px] cursor-pointer "
                onClick={() => router.push("/profile")}
              />
              <h1 className="ml-10 text-white font-semibold text-xl">
                {user?.fullName}
              </h1>
            </div>
            <div className="bg-redPrimary sm:bg-white p-1 w-20 flex justify-center rounded-md text-white font-semibold sm:text-black  sm:hover:border-2 sm:hover:border-white sm:hover:bg-redPrimary sm:hover:text-white transition-all hover:text-black sm:mt-14">
              <SignOutButton />
              {/* <button>Sign Out</button> */}
            </div>
          </div>
        </div>
        <div className="flex p-4 flex-col hidden sm:inline ">
          <h1 className=" ml-7 mt-16 font-bold text-4xl">Your Orders</h1>

          {orders.map((order) => (
            <OrderCard orderId={order._id} key={order._id} foodName={order.foodItem} date={order.date} price={order.price} img={order.img}/>
          ))}
        </div>
      </div>
      <div className="flex p-4 flex-col  sm:hidden ">
        <h1 className=" mt-16 font-bold text-4xl ml-6">Your Orders</h1>

        {orders.map((order) => (
          <OrderCard orderId={order._id} key={order._id} foodName={order.foodItem} date={order.date} price={order.price} img={order.img}/>
          
        ))}
      </div>
    </div>
  );
};

export default Profile;
