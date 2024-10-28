import React from 'react'
import Button from '../Button'
import { shoe8 } from '../../assets/images'

const Quality = () => {
  return (
    <>
      <section className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap elative z-10 pr-10'>Discover
            <span className='text-coral-blue inline-block mt-3'> Premium</span>
          </span>
          <br />
          <span className='text-coral-blue inline-block mt-3'>Footwear</span>
        </h2>
        <div className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
          <div >
            <p className='mt-4 lg:max-w-lg info-text'>
              Explore Nike's world of top-tier sportswar ans athletic footware. Uncove high-quality
              products meticulously crafted to elevate both your atheletic performance and style.
              Shop the latest collections and indulge in unbeatable comfort and fashion. Join the
              Nike Community today.
            </p>
            <p className='mt-6 lg:max-w-lg info-text'>
              Immerse yourself in our newnest collections, deliverring unparalleled comfort and
              unrivaled style. Become a pat of the NIke community today and experience
              the pinnacle of Nike community today and experience the pinneacle of
              sportswear excellence.
            </p>
            <div className='mt-11'>
              <Button label={"View Details"} />
            </div>
          </div>
          <div className='flex flex-1 justify-center items-center bg-gradient-to-r from-blue-200 to-green-100 rounded'>
            <img src={shoe8} alt="shoe" width={570} height={522} className='object-cover h-auto' />
          </div>
        </div>
      </section>

    </>
  )
}

export default Quality