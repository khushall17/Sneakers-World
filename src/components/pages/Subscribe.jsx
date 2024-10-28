import React from 'react'
import Button from '../Button'

const Subscribe = () => {
  return (
    <>
      <section className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
        <h3 className='text-4xl max-lg:text-3xl max-sm:text-2xl leading-[60px] lg:max-w-md font-palanquin font-bold'>
          Sign Up For &nbsp; 
          <span className='text-coral-blue'>
            Updates &nbsp; 
           </span> 
           & Newsletter 
        </h3>
        <div className='w-full flex items-center lg:max-w-[40%] max-sm:flex-col p-1.5 max-sm:p-0.5 gap-5 
         sm:border sm:border-slate-gray rounded-full'>
          <input type="email" placeholder="Subscribe For Updates" className='input'/>
          <div className='flex items-center max-sm:justify-end max-sm:w-full'>
            <Button label="subscribe"/>
          </div>
         </div>
      </section>
    </>
  )
}

export default Subscribe