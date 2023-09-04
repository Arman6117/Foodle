import React from "react";
import HeroImage from "../../../public/assets/fast_food_vec.jpg";

import Image from "next/image";
const page = () => {
  return (
    <div className="bg-lightRed h-screen overflow-hidden  ">
     
      <div className="h-screen  justify-center items-center flex">
      
        <div className=" h-[80%] z-10 w-[70%] bg-white rounded-md  "></div>
        <div>
          <div></div>
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
