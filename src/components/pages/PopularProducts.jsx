import React from 'react'
import { products } from '../../constants'
import { PopularProductsCard } from '../PopularProductsCard'
const PopularProducts = () => {
  return (
   <>
    <div className='max-container max-sm:mt-12' id="products">
      <div className='fles flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin'>
          Our Popular <span className='text-coral-blue font-medium'>Products</span>
        </h2>
        <p className='mt-2 font-montserrat lg:max-w-lg text-slate-gray'>
            Explore top quality products meticulously crafted to elevate your 
            athletic performance and enhance your pesonal style.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-4'>
        {products.map((product)=>(
          <PopularProductsCard key={products.name} {...product} />
        ))}
      </div>
    </div>
   </>
  )
} 

export default PopularProducts