'use client'
import { SignIn, SignUp,useUser } from "@clerk/nextjs";
import React from "react";
import { useEffect } from "react";


const Page = () => {

 
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-redPrimary h-screen">
        <SignUp appearance={{
          elements:{
            headerTitle:'text-red font-bold text-2xl',

            card:'scale-90 sm:scale-100 bg-lightRed',

            socialButtonsBlockButton:'border-[#ea5858] border-2 text-gray-600 font-bold text-2xl hover:bg-redPrimary hover:text-white group ',
            socialButtonsBlockButtonArrow:'text-white/100',

            formFieldLabel:'text-red text-lg',

            formFieldInput:'text-black text-lg bg-lightRed font-semibold',

            formButtonPrimary:'bg-redPrimary/50 text-[16px] hover:bg-redPrimary',

            footerAction:'hidden'
          }
        }} />
        
         
        
      </div>
    </div>
  );
};

export default Page;
