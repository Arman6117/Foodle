"use client";
import React, { useState } from "react";
import useFoodItemStore from "@/utils/store";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const OrderDetails = () => {
  const state = useFoodItemStore();
 const id = state.orderId
 const [submit, setSubmit] = useState(false)
 const router = useRouter();
  const cancelOrder = async() =>{
    setSubmit(true)
    try {
        await fetch(`/api/orders/${id.toString()}`,{method:'DELETE'})
        
    } catch (error) {
        console.log(error.message);
        setSubmit(false)
    }
    setSubmit(false)
    toast.success("Your Order has been Canceled", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      setTimeout(() => {
        router.push('/profile');
      }, 2000);
  }
  return (
    <div className="flex flex-col p-4 gap-5">
    <ToastContainer/>
      <h1 className="text-2xl font-black">Order Details</h1>
      <div className="flex flex-col gap-2 justify-center">
        <div className="flex ">
          <span className="text-gray-500">Name: </span>
          <span className="ml-8 font-semibold text-black ">
            {state.cusName}{" "}
          </span>
        </div>
        <div className="border-yellow-400 border-[1.5px] border-dashed " />
        <div className="flex ">
          <span className="text-gray-500">Address: </span>
          <span className="ml-4 font-semibold text-black text-xs ">
            {state.orderAdd}{" "}
          </span>
        </div>
        <div className="border-yellow-400 border-[1.5px] border-dashed " />
        <div className="flex ">
          <span className="text-gray-500">Number: </span>
          <span className="ml-4 font-semibold text-black  ">
            {state.number}{" "}
          </span>
        </div>
        <div className="border-yellow-400 border-[1.5px] border-dashed " />
        <div className="flex ">
          <span className="text-gray-500">Quantity: </span>
          <span className="ml-4 font-semibold text-black  ">
            {state.foodQuantity}{" "}
          </span>
        </div>
      </div>
      <div className="border-yellow-400 border-[1.5px] -mt-3 border-dashed " />
      <div className="flex -mt-2">
        <span className="text-gray-500">Date: </span>
        <span className="ml-4 font-semibold text-black  ">
          {state.orderDate}{" "}
        </span>
      </div>
      <div className="border-yellow-400 border-[1.5px] -mt-3 border-dashed " />

      <div className="flex mt-6 justify-between">
        <h1 className="font-bold text-green-500 text-lg">
          Price: {state.foodPrice}
        </h1>
        <button
          className="bg-red-700 text-white p-1 rounded-md font-semibold w-32 hover:bg-red-400 transition-all"
          onClick={cancelOrder}
        >
          {submit ? "Processing...." : 'Cancel Order'}
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
