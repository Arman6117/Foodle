'use client'
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useFoodItemStore from "@/utils/store";
const OrderCard = ({ img, key, foodName, date, price,orderId,quantity,number,address,name }) => {
    const router = useRouter();
    const state = useFoodItemStore();
    const setImg = state.setFoodItem;
    const setName = state.setFoodName;
    const setPrice = state.setFoodPrice;
    const setQuantity = state.setFoodQuantity;
    const setNumber = state.setNumber;
    const setDate = state.setDate;
    const setAdd = state.setAdd;
    const setCusName = state.setCusName;
    const setId = state.setOrderId
    // const order_id = key
  return (
    <div
      className="ml-6 p-4 w-11/12 sm:w-[110%] md:w-[120%] bg-redPrimary  flex rounded-md shadow-2xl mt-8 w-"
      key={key}
    >
      <div className="flex">
        <Image
          alt=""
          src={img}
          height={170}
          width={170}
          className="rounded-full h-[100px] w-[100px]  sm:h-[90px] sm:w-[90px]"
        />
        <div className="flex flex-col gap-2 sm:w-48 w-[11rem] ">
          <h3 className="text-white font-semibold text-xl ml-7">{foodName}</h3>
          <h3 className="ml-7 text-xs font-bold text-gray-700">
            Ordered On: {date}
          </h3>
          <h3 className="ml-7 text-gray-100 font-bold text-xl mt-2">
            Price: {price}
          </h3>
        </div>
        <div className="relative top-7 sm:left-[30%] left-[18%]  text-center flex flex-col gap-4 group float-right">
          <div className="w-20 bg-white rounded-md opacity-0 group-hover:opacity-100 transition-all">
            <span className="text-sm font-bold mb-4"> All Details</span>
            <div className="border-white border-[1.5px] rotate-90 w-[25px] relative top-2 left-[28px] opacity-0 group-hover:opacity-100 transition-all" />
          </div>
          <ArrowCircleRightIcon className="h-9 cursor-pointer text-white   " onClick={()=>{
            setImg(img);
            setName(foodName);
            setPrice(price);
            setQuantity(quantity);
            setNumber(number);
            setAdd(address);
            setDate(date)
            setCusName(name)
            setId(orderId)
            router.push(`order/${orderId}`)
          }} />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
