import Image from 'next/image'
import React from 'react'

const FoodCCategory = ({food,name,bg}) => {
  return (
    <div className="">
              <Image src={food} alt="" className="sm:h-96  object-contain"/>

              <Image
                src={bg}
                alt=""
                className="relative bottom-80 sm:bottom-72 -z-10 h-60 sm:h-44 object-contain"
              />
            </div>
  )
}

export default FoodCCategory