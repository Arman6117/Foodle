import React from "react";
import { TbBrandFacebook, TbBrandInstagram, TbBrandTwitter } from "react-icons/tb/index.esm";

const Footer = () => {
  return (
    <div className="relative top-[110rem] sm:top-[50rem] md:top-[20rem] ">

    <div className="  flex space-x-28 bg-redPrimary/80 px-16 pt-10 pb-28">
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col space-y-2">
          <h1 className="footerText">Foodle</h1>
          <span className="text-xs text-gray-600">
            Continue Foodle 2023 all rights reserved
          </span>
        </div>
        <div className="footerText mt flex flex-col space-y-2">
          <h1>Follow Us On</h1>
          <div className="flex text-gray-600 space-x-3 text-2xl">
            <TbBrandInstagram />
            <TbBrandFacebook />
            <TbBrandTwitter />
          </div>
        </div>
      </div>
      <div className="flex space-x-32">
        <div className=" flex flex-col">
            <h1 className="footerText">Menu</h1>
            <div className="flex flex-col space-y-3 mt-3">
             <h3 className="text-sm text-gray-600">Home</h3>
             <h3 className="text-sm text-gray-600">Offers</h3>
             <h3 className="text-sm text-gray-600">Service</h3>
             <h3 className="text-sm text-gray-600">About Us</h3>
            </div>
        </div>
        <div className="flex flex-col hidden sm:inline">
        <h1 className="footerText">Information</h1>
        <div className="flex flex-col space-y-3 mt-3">
             <h3 className="text-sm text-gray-600">Menu</h3>
             <h3 className="text-sm text-gray-600">Quality</h3>
             <h3 className="text-sm text-gray-600">Make a choice</h3>
             <h3 className="text-sm text-gray-600">Fast Delivery</h3>
             <h3 className="text-sm text-gray-600">Subscribe</h3>
            </div>
        </div>
        <div className="flex flex-col hidden sm:inline">
        <h1 className="footerText">Contact</h1>
        <div className="flex flex-col space-y-3 mt-3">
             <h3 className="text-sm text-gray-600">+911234567</h3>
             <h3 className="text-sm text-gray-600">Explore</h3>
             <h3 className="text-sm text-gray-600">info@Foodle.com</h3>
             <h3 className="text-sm text-gray-600">1245,Pune,India</h3>
   
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
