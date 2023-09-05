"use client";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { useRouter } from "next/navigation";
import useFoodItemStore from "@/utils/store";
// import {useFoodItemStore} from '../utils/store'
const api = createApi({
  accessKey: "vH7g7qaMV-VUwPZfulmtc0UKU7PXSBPPAs3cpXWDkZE",
});
// console.log(typeof(process.env.UNSPLASH_ACCESS_KEY));
const MenuCard = ({ foodItem, foodItemPrice }) => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const imgData = await api.search.getPhotos({
          query: foodItem,
          orientation: "squarish",
        });
        const image = imgData.response.results[0].urls.regular;

        const foodItemDetails = {
          image,
          foodItemName: foodItem,
          price: foodItemPrice,
        };

        saveToDatabase(foodItemDetails);
        setData(imgData.response.results[0]);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPhotos();
  }, [foodItem]);

  const saveToDatabase = async (foodItemDetails) => {
    try {
    
        await fetch("/api/menuCards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(foodItemDetails),
        });
      
    } catch (error) {
      console.log(error.message);
    }
  };

  // const state = useFoodItemStore();
  const setFoodItem = useFoodItemStore((state)=>state.setFoodItem);
  const setFoodName = useFoodItemStore((state)=>state.setFoodName);
  return (
    <>
      {data === null ? (
        <div>Loading...</div>
      ) : (
        <div className="">
          <div className="w-56 h-72 bg-[#feeadf] rounded-[30px]">
            <div className="ml-10">
              <img
                className=" shadow-2xl relative bottom-12 left-20 h-44 border-[#ea5858] border-[12px] rounded-full object-contain"
                src={data.urls.regular}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-black text-2xl mb-2 ml-5 -mt-7">
                {foodItem}
              </h1>
              <div className="flex ml-5">
                <StarIcon className="h-5  text-yellow-400" />
                <StarIcon className="h-5  text-yellow-400" />
                <StarIcon className="h-5  text-yellow-400" />
                <StarIcon className="h-5  text-yellow-400" />
                <StarIcon className="h-5  text-yellow-400" />
              </div>
              <div className="flex gap-12">
                <h1 className="font-black text-2xl ml-5 mt-5 ">
                  ₹{foodItemPrice}
                </h1>
                <button
                  className="font-semibold text-white mt-4 bg-redPrimary  text-xs rounded-full w-24 h-9"
                  onClick={() => {
                    setFoodItem(data.urls.regular)
                    setFoodName(foodItem)
                    router.push(`buy-now/${foodItem}`);
                    
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCard;
