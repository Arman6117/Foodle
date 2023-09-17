import React from "react";
import HeroImage from "../../../public/assets/fast_food_vec.jpg";

import Image from "next/image";
// import useFoodItemStore from "@/utils/store";
import FoodItemDetail from "@/components/FoodItemDetail";
import ConfirmOrderForm from "@/components/ConfirmOrderForm";


const page = () => {
  return (
    <div className="bg-lightRed h-screen overflow-hidden  ">
     
    <div className="h-screen  justify-center items-center flex">
      
        <div className=" sm:h-[80%] h-full w-full  z-10 sm:w-[70%] sm:rounded-md  shadow-2xl flex flex-col sm:flex-row ">

        <div className="w-full sm:w-2/5 h-1/3 sm:h-full bg-redPrimary  rounded-tl-md rounded-bl-md" > {/*Left section*/}
          <div>
          <FoodItemDetail/>
          </div>
        </div>
        <div className="h-full sm:w-3/5  bg-white rounded-tr-md  rounded-br-md">
          <ConfirmOrderForm/>
        </div>
        </div>
      </div>
      <Image
        alt="hero image"
        src={HeroImage}
        className="  -z-0  opacity-5  object-contain relative -top-[40rem]  overflow-hidden "
      />
    </div>
  );
};

export default page;
