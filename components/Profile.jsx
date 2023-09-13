"use client";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useRouter } from "next/navigation";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Image from "next/image";
import useFoodItemStore from "@/utils/store";
import { createApi } from "unsplash-js";
const Profile = () => {
  const router = useRouter();
  const { user } = useUser();
  const id = user?.id;
  const [orders, setOrders] = useState([]);
  const api = createApi({
    accessKey: "vH7g7qaMV-VUwPZfulmtc0UKU7PXSBPPAs3cpXWDkZE",
  });
  const [foodItem,setFoodItem] = useState('')
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`/api/orders/${id}`);
      const data = await response.json();

      setOrders(data);
    };

    if (id) fetchOrders();
  }, [id]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const imgData = await api.search.getPhotos({
          query: foodItem,
          orientation: "squarish",
        });
        const image = imgData.response.results[0].urls.regular;

        const foodItemDetails = {
          image,
          foodItemName: foodItem,
          price: foodItemPrice,
        };

        saveToDatabase(foodItemDetails);
        setData(imgData.response.results[0]);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPhotos();
  }, [foodItem]);
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
            <div className="mt-14 hidden sm:inline space-y-5 ">
              <Image
                src={user?.profileImageUrl}
                width={130}
                height={130}
                alt="profile image"
                className="object-contain rounded-full sm:h-[180px] sm:w-[180px] cursor-pointer "
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
          <div className="flex space-y-6">
            {orders.map((order) => (
              
              <div className="" key={order._id}>
                <div>
                
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
