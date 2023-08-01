import React from "react";

import Burger from "../public/assets/Burger.png";
import Pizza from "../public/assets/Pizza.png";
import Fries from "../public/assets/French_fries.png";
import BgGreen from "../public/assets/BgRecGreen.png";
import BgYellow from "../public/assets/BgRecYellow.png";
import BgRed from "../public/assets/BgRecRed.png";
import Image from "next/image";
const BestCategories = () => {
  return (
    <div className="px-7 mt-28 md:mt-32 h-screen">
      <div className=" font-JanoSans md:flex md:justify-between md:space-x-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold pb-7 ">
          Best <span className="text-red">Delivered</span>
          <br />
          Categories
        </h1>
        <p className="pr-11 text-gray-500 md:text-sm text-xs">
          Here Are Our Some Of Best Distributed <br /> Categories. If You Want
          You Can
          <br /> Order From Here.
        </p>
      </div>
      <div>
        <div>
          <div className="mt-10 sm:flex sm:justify-end">
            <div>
            <div className="flex flex-col  items-center">

              <Image src={Burger} alt="" className="sm:h-96  object-contain" />
<h1 className="relative">Burgers</h1>
            </div>
              <Image
                src={BgGreen}
                alt=""
                className="relative bottom-80 sm:bottom-72 -z-10 h-60 sm:h-44 object-contain"
              />
            </div>
            <div className="w-screen">
            <div className="flex flex-col  items-center">

              <Image
                src={Pizza}
                alt=""
                className="sm:h-96 sm:w-96 object-contain"
              />
              <h1>Pizza</h1>
            </div>

              <Image
                src={BgYellow}
                alt=""
                className="relative bottom-96 sm:bottom-72 -z-10 h-60 sm:h-44 object-contain"
              />
            </div>
            <div >
            <div className="flex flex-col  items-center">

              <Image src={Fries} alt="" className="sm:h-96  object-contain" />
                <h1>French Fries</h1>
            </div>

              <>
                <Image
                  src={BgRed}
                  alt=""
                  className="relative bottom-80 sm:bottom-72 -z-10 h-60 sm:h-52 object-contain"
                />
            
              </>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCategories;
