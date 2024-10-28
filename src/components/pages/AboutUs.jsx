import React from 'react'
import { storeimage1, storeimage2, storeimage3, storeimage4 } from '../../assets/images'
import Button from '../Button';

const AboutUs = () => {
  return (
    <div className="px-4 lg:px-12 mx-auto py-4 mb-5" id="about-us">
      <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold text-coral-blue mb-4">About Us</h2>
      <div className="flex flex-col-reverse sm:flex-row-reverse justify-between items-center gap-8 ">
        <div>
          <h2 className="text-2xl mb-6 shadow-sm info-text">
            What is SneakerHead community?
          </h2>
          <p className=" mb-8 w-[90%] info-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            commodi unde delectus obcaecati maiores, animi laudantium ratione
            harum odit iure repellendus quasi mollitia molestias eos maxime?
            Tempora eveniet velit omnis.
          </p>
          {/* <a
            href="#"
            className="bg-gray-800 px-12 py-4 rounded-md text-white capitalize md:px-12">
            know more
          </a> */}
          <Button label="Know More"/>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="relative">
            <img src={storeimage1} alt="store" />
            <p className="absolute bottom-4 shadow-sm left-4 text-white text-sm md:text-xl font-bold">
              Delhi
            </p>
          </div>
          <div className="relative">
            <img src={storeimage2} alt="store" />
            <p className="absolute bottom-4 shadow-sm left-4 text-white text-sm md:text-xl font-bold">
              Mumbai
            </p>
          </div>
          <div className="relative">
            <img src={storeimage3} alt="store" />
            <p className="absolute bottom-4 shadow-sm left-4 text-white text-sm md:text-xl font-bold">
              Hyderabad
            </p>
          </div>
          <div className=" relative">
            <img src={storeimage4} alt="store" />
            <p className="absolute bottom-4 shadow-sm left-4 text-white text-sm md:text-xl font-bold">
              Banglore
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default AboutUs