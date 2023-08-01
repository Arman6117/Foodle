import React from "react";
import { ClockIcon } from "@heroicons/react/outline";

const bannerIconStyles = [
  "md:h-14",
  "mt-5",
  "p-3",
  "text-black/70",
  "bg-yellowPrimary",
  "rounded-full",
  "h-12",
];

const BannerContent = ({ title, text, icon: Icon }) => {
  return (
    <div className="w-full">
      <div className="flex  md:text-xl text-sm max-w-lg font-bold  px-1 pt-2 gap-3 text-black">
        <Icon className={bannerIconStyles.join(" ")} />

        {title}
      </div>
      <p className="relative md:left-[70px] left-[65px] md:pr-48  text-gray-400 text-[10px] bottom-10 ">
        {text}
      </p>
    </div>
  );
};

export default BannerContent;
