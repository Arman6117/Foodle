'use client'
import Image from 'next/image'
import React from 'react'
import useFoodItemStore from '@/utils/store'

const FoodItem = () => {
    const state = useFoodItemStore();
  return (
    <div className='p-4'>
    <div className='flex sm:flex-col text-center gap-7 sm:gap-4 sm:items-center'>

         <Image
          alt=""
          src={state.foodItem}
          height={170}
          width={170}
          className="rounded-full h-[100px] w-[100px]  sm:h-[150px] sm:w-[150px] sm:mt-8"
        />
        <h1 className='font-bold text-white text-2xl  mt-8'>{state.foodName}</h1>
    </div>
    </div>
  )
}

export default FoodItem