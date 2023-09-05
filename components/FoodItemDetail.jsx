'use client'
import useFoodItemStore from '@/utils/store'
import Image from 'next/image';
import React from 'react'

const FoodItemDetail = () => {
    const state = useFoodItemStore();
    const foodItem = state.foodItem
    const foodName = state.foodName
console.log(foodItem);
  return (
    <div className='flex flex-col p-4 sm:items-center sm:text-center  sm:mt-12'>
        <div className='ml-2'>
            <Image alt='' src={foodItem} height={170} width={170} className='rounded-full h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]'/>
            <h1 className='mt-2 font-bold sm:text-xl text-white'>{foodName}</h1>
        </div>
        <div className=''></div>
    </div>
  )
}

export default FoodItemDetail