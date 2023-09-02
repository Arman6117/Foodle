import React from "react";
import BannerContent from "./BannerContent";
import { ClockIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
const Banner = () => {
  return (
    <div className=" md:pl-16 pl-4 justify-between flex-1 -mt-16 flex w-[90%]   font-baloo bg-white mx-auto shadow-2xl rounded-3xl ">
      <div className=" flex gap-3 sm:gap-10 flex-col sm:flex-row justify-between flex-1 items-center pt-2 ">
        <div className="flex pt-2 sm:pt-5">
          {/* <ClockIcon className="h-14  mt-5  p-3 text-black/70 bg-yellowPrimary rounded-full" /> */}
          <BannerContent
            title={"  Fast Delivery"}
            text={
              " The Food Will Be Delivered To  Your House Within 1-2 Hours Of Your Ordering"
            }
            icon={ClockIcon}
          />
        </div>
        <div className="flex pt-5">
          {/* <ClockIcon className="h-16  mt-5 p-2 text-black/70 bg-yellowPrimary rounded-full" /> */}
          <BannerContent
            title={"Fresh Food"}
            text={
              "Your Food Will Be Delivered 100% Fresh To Your Home We Do Not Stale Food"
            }
            icon={PaperAirplaneIcon}
          />
        </div>
        {/* <div className="flex pt-5">
          <BannerContent
            title={"Free Delivery"}
            text={"No Cost Just Enjoy "}
            icon={ClockIcon}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
