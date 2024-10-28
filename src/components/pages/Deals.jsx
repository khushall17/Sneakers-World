import React from 'react'
import { offer } from '../../assets/images'
import Button from '../Button'
import { arrowRight } from '../../assets/icons'


const Deals = () => {
  return (
    <>
      <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
        <div className='flex-1'>
          <img src={offer} alt="deals" width={773} height={688}
            className='object-contain w-full' />
        </div>


        <div className='flex flex-1 flex-col'>
          <h2 className='text-4xl font-bold font-palanquin'>
            <span className='text-coral-blue'>Exclusive </span>
            Deals
          </h2>
          <p className="mt-4 info-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Eos praesentium quaerat aut labore repellat dolores. Tempora

          </p>
          <p className='mt-4 info-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Autem beatae sit facere vitae, dolorem enim? Consectetur

          </p>

          <div className='mt-11 flex flex-wrap gap-4 '>
            <Button label="shop Now" iconUrl={arrowRight} />
            <Button label={"Learn More"} backgroundColor={"bg-white hover:bg-slate-gray"}
              borderColor={"border-slate-gray hover:border-gray-700"}
              textColor={"text-slate-gray hover:text-white"} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Deals