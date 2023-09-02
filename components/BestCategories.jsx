import React from "react";

import Burger from "../public/assets/Burger.png";
import Pizza from "../public/assets/Pizza.png";
import Fries from "../public/assets/French_fries.png";
import BgGreen from "../public/assets/BgRecGreen.png";
import BgYellow from "../public/assets/BgRecYellow.png";
import BgRed from "../public/assets/BgRecRed.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowNarrowRightIcon, ArrowRightIcon } from "@heroicons/react/outline";
const BestCategories = () => {
  return (
    <div className="px-7 ml-7 mt-28 md:mt-32 h-screen">
      <div className=" font-baloo md:flex md:justify-between md:space-x-8">
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
        <div className="p-3 text-black">
          <div className="mt-10 flex flex-col md:flex-row">
            <div>
              <div className="flex flex-col  items-center">
                <Image
                  src={Burger}
                  alt=""
                  className="md:h-96 h-80  object-contain"
                />
                <h1 className="categoryText">Burgers</h1>
                <Link href="" className="categoryTextLink group">
                  Order Now{" "}
                  <ArrowNarrowRightIcon className="categoryTextLinkArrow" />
                </Link>
              </div>

              <Image
                src={BgGreen}
                alt=""
                className="relative sm:ml-16  md:ml-0 md:bottom-[22rem]  bottom-[20rem] sm:bottom-[20rem] -z-10 h-40 sm:h-44 object-contain"
              />
            </div>
            <div className="w-screen mr-1 relative -left-10 md:static">
              <div className="flex flex-col  items-center justify-center">
                <Image
                  src={Pizza}
                  alt=""
                  className="md:h-96 h-80  object-contain"
                />
                <h1 className="categoryText">Pizza</h1>
                <Link href="" className="categoryTextLink group">
                  Order Now{" "}
                  <ArrowNarrowRightIcon className="categoryTextLinkArrow" />
                </Link>
              </div>

              <Image
                src={BgYellow}
                alt=""
                className="relative sm:ml-28  md:ml-0 md:bottom-[22rem]   bottom-80 sm:bottom-80 -z-10 h-44 object-contain"
              />
            </div>
            <div className="ml-16 sm:ml-0 ">
              <div className="flex flex-col items-center">
                <Image src={Fries} alt="" className="md:h-96 h-80 object-contain" />
                <h1 className="categoryText">French Fries</h1>
                <Link href="" className="categoryTextLink group">
                  Order Now{" "}
                  <ArrowNarrowRightIcon className="categoryTextLinkArrow" />
                </Link>
              </div>

              <>
                <Image
                  src={BgRed}
                  alt=""
                  className="relative sm:ml-16  bottom-80 md:ml-0 md:bottom-[22rem]  -z-10 h-52 object-contain"
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
