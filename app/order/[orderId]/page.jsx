'use client'
import Image from 'next/image'
import React from 'react'
import HeroImage from "../../../public/assets/fast_food_vec.jpg";
import FoodItemDetail from '@/components/FoodItemDetail';
import useFoodItemStore from '@/utils/store';
import FoodItem from '@/components/FoodItem';
import OrderDetails from '@/components/OrderDetails';
const page = () => {
  return (
    <div className="bg-lightRed h-screen overflow-hidden  ">
     
    <div className="h-screen  justify-center items-center flex">
      
        <div className=" h-full z-10 w-full rounded-md  shadow-2xl flex flex-col sm:flex-row ">

        <div className="w-full sm:w-2/5 h-1/3 sm:h-full bg-redPrimary  rounded-tl-md rounded-bl-md" > {/*Left section*/}
          <div>
          <FoodItem/>
          </div>
        </div>
        <div className="h-full sm:w-3/5  bg-white rounded-tr-md  rounded-br-md">
          <OrderDetails/>
        </div>
        </div>
      </div>
      <Image
        alt="hero image"
        src={HeroImage}
        className="  -z-0  opacity-5  object-contain relative -top-[40rem]  overflow-hidden "
      />
    </div>
  )
}

export default page