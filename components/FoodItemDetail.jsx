"use client";
import useFoodItemStore from "@/utils/store";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState } from "react";

const FoodItemDetail = () => {
  const state = useFoodItemStore();
  const foodItem = state.foodItem;
  const foodName = state.foodName;
  let price = state.foodPrice;
  const originalPrice = price;
  const setPrice = useFoodItemStore((state) => state.setFoodPrice);
  const setQuantity = useFoodItemStore((state)=>state.setFoodQuantity);
  const quantity = state.foodQuantity
  // console.log(foodItem);
  const [currentPrice, setCurrentPrice] = useState(originalPrice);
  return (
    <div className="flex flex-col p-4 sm:items-center  sm:text-center  sm:mt-12">
      <div className="ml-2 flex sm:flex-col">
        <Image
          alt=""
          src={foodItem}
          height={170}
          width={170}
          className="rounded-full h-[100px] w-[100px]  sm:h-[150px] sm:w-[150px]"
        />
        <h1 className=" hidden sm:inline ml- mt-2 font-bold sm:text-xl text-lg text-white">
          {foodName}
        </h1>
        <div>
          <div className="flex space-x-6 ml-14 sm:ml-0 ">
            <MinusCircleIcon
              className="text-yellow-500  h-10 mt-8 cursor-pointer"
              onClick={() => {
                if (quantity != 0) {
                  setQuantity(quantity - 1);
                  setPrice(price - currentPrice);
                } else {
                  setQuantity(1);
                  setPrice(currentPrice);
                }
              }}
            />
            <span className="mt-9 font-bold text-white text-3xl pointer-events-none">
              {quantity}
            </span>
            <PlusCircleIcon
              className="text-green-400 h-10 mt-8 cursor-pointer "
              onClick={() => {
                setQuantity(quantity + 1);
                setPrice(price + currentPrice);
              }}
            />
          </div>
       
          <div></div>
        </div>
      </div>
      <div className=" w-[145px] text-center">
        <h1 className=" sm:hidden   mt-2 font-bold sm:text-xl text-lg text-white">
          {foodName}
        </h1>
      </div>

      {/* <div className=""></div> */}
    </div>
  );
};

export default FoodItemDetail;
