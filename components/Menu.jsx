'use client'
import { useEffect } from "react";
import Footer from "./Footer";
import MenuCard from "./MenuCard";
import { useRouter } from "next/navigation";

const Menu = () => {



  const router  = useRouter()
  // console.log(data);
  return (
    <div className="mb-96">
 <div className="mt-[80rem] ml-7 px-7 mb-96 md:mt-36 h-screen  ">
      <div className=" font-baloo md">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold pb-7 ">
              Our <span className="text-red">Regular</span> Menu
            </h1>
            <p className=" text-gray-500 md:text-sm text-xs">
              These Are Our Regular Menus. Regular Menu. You Can
              <br /> Order Anything You Like.
            </p>
          </div>
          <div className="">
            <button className="font-semibold text-white mt-5 md:mt-12 text-sm bg-redPrimary   rounded-full w-24 h-9" onClick={()=>{router.push('/menus')}}>
              See All
            </button>
          </div>
        </div>
        <div className="flex mb-96 flex-col flex-wrap  items-center justify-center  gap-32 sm:justify-start sm  sm:gap-32  sm:flex-row mt-16">
        

        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Menu;
