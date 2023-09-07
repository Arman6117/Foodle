"use client";
import React from "react";
import useFoodItemStore from "@/utils/store";
const ConfirmOrderForm = () => {
  const price = useFoodItemStore((state) => state.foodPrice);
  return (
    <form>
      <div className="flex flex-col items-center sm:space-y-10  ">
        <div className="flex mt-5  space-y-2 flex-col">
          <label className="">
            <span className="text-red font-semibold">Name</span>
          </label>
          <input
            type="text"
            required
            className="inputs focus:border-red sm:w-52 focus:border-[#ea5858] transition-all focus:caret-[#ea5858] md:w-72"
          />
        </div>
        <div className="flex mt-5  space-y-2 flex-col">
          <label className="">
            <span className="text-red font-semibold">Address</span>
          </label>
          <input
            type="text"
            required
            className="inputs focus:border-red sm:w-52 focus:border-[#ea5858] transition-all focus:caret-[#ea5858] md:w-72 "
          />
        </div>
        <div className="flex mt-5  space-y-2 flex-col">
          <label className="">
            <span className="text-red font-semibold">Phone Number</span>
          </label>
          <input
            type="tel"
            required
            className="inputs focus:border-red sm:w-52 focus:border-[#ea5858] transition-all focus:caret-[#ea5858] md:w-72 "
          />
        </div>
      </div>
      <div className="flex space-x-20 sm:space-x-2 justify-center md:space-x-20 sm:mt-16">
        <div className=" mt-6 ">
          <span className="font-black text-rose-600 text-xl ">Total: </span>
          <span className="ml-3 text-xl font-black text-green-500">
            ₹{price}
          </span>
        </div>
        <div className="mt-5  ">
          <button className="bg-yellow-300 p-[5px] w-24 rounded-md font-bold hover:bg-redPrimary hover:text-white transition-all">
            Proceed
          </button>
        </div>
      </div>
    </form>
  );
};

export default ConfirmOrderForm;
