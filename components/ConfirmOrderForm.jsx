"use client";
import React, { useState } from "react";
import ReactLoading from "react-loading";
import useFoodItemStore from "@/utils/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmOrderForm = () => {
  const state = useFoodItemStore();
  const price = useFoodItemStore((state) => state.foodPrice);
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  const [number, setNo] = useState(null);
  const quantity = state.foodQuantity;
  const foodItem = state.foodName;
  const img = state.foodItem;
  const [submit, setSubmit] = useState(false);
  const { user } = useUser();
  const userId = user?.id;
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    try {
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      const date = `${day}-${month}-${year}`;
      await fetch(`/api/buy-now`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          add,
          foodItem,
          quantity,
          number,
          price,
          userId,
          date,
          img
        }),
      });

      setSubmit(false);
      toast.success("Your Order Has Been Placed!!!!!!!!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      setTimeout(() => {
        push();
        
      }, 4000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const push = () => {
    router.push(`/`);
  };

  return (
    <>
      {submit ? (
        <div className=" w-full bg-white transition-all h-full flex flex-col space-y-3 items-center justify-center opacity-80">
          <ReactLoading type="spin" color="red" />
          <span className="text-xl font-black"> Proceeding....</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="flex flex-col space-y-8 items-center sm:space-y-10  ">
            <div className="flex mt-5  space-y-2 flex-col">
              <label className="">
                <span className="text-red font-semibold">Name</span>
              </label>
              <input
                type="text"
                required
                className="inputs focus:border-red sm:w-52 focus:border-[#ea5858] transition-all focus:caret-[#ea5858] md:w-72"
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                onChange={(e) => {
                  setAdd(e.target.value);
                }}
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
                onChange={(e) => {
                  setNo(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex space-x-20 sm:space-x-2 justify-center md:space-x-20 sm:mt-16">
            <div className=" mt-12 ">
              <span className="font-black text-rose-600 text-xl ">Total: </span>
              <span className="ml-3 text-xl font-black text-green-500">
                ₹{price}
              </span>
            </div>
            <div className="mt-12  ">
              <button
                type="submit"
                className="bg-yellow-300 p-[5px] w-24 rounded-md font-bold hover:bg-redPrimary hover:text-white transition-all"
              >
                Proceed
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ConfirmOrderForm;
