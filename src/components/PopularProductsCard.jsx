import React from 'react'
import { star } from '../assets/icons'
export const PopularProductsCard = ({
    imgURL,
    name,
    price
}) => {
  return (
   <>
    <div className='flex justify-center items-center flex-1 flex-col w-full max-sm:w-full'>
        <div className='bg-gradient-to-l from-teal-100 to-slate-300 rounded'>
            <img src={imgURL} alt={name} className='w-[280px] h-[280px] max-sm:h-[130px] object-contain cursor-pointer' fill/>
        </div>

        <div className='mt-8 flex-col justify-start gap-2.5'>
            <div className='flex items-center gap-2'>
                <img src={star} alt="star" width={24} height={24} />
                <p className='text-xl font-montserrat leading-normal test-slate-gray'>
                    (4.5)
                </p>
            </div>
            <h3 className='mt-1 text-2xl leading-normal font-semibold font-palanquin'>
                {name}
            </h3> 
            <p className='mt-1 font-semibold font-montserrat text-coral-blue text-2xl leading-normal'>
                {price}
            </p>
        </div>
    </div>
   </>
  )
}
