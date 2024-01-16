import React from 'react'
import HeroImg from '../assets/images/hero.jpg'
import Stats from '../components/Stats'
import { MdOutlineAdd, MdLocationPin } from "react-icons/md";

const Hero = () => {
  return (
    <div className="flex justify-center md:py-20 py-10 gap-5 w-[90%] mx-auto">
        <div className="flex justify-between flex-col-reverse md:flex-row">

          {/*   Text Area   */}
          <div className="md:py-20 md:w-[55%]">

            <h1 className="text-3xl md:text-5xl md:mt-0 mt-12 mb-6 md:my-10 font-bold">
              Switch To <span className="text-green-300">Green</span> With Innovative Solar Panels.
            </h1>

            <p className="mb-6 md:mb-10 md:text-xl text-md text-gray-500">
              Professional solar panel installation for home and businesses. Hassle-free, high quality, effecient-solutions.
            </p>

            <button className="text-xl md:px-4 px-3 md:py-3 py-2 bg-green-300 rounded-md text-black/90">Get a Quote</button>

            {/*     Stats   */}
            <div className="mt-10 md:flex gap-10 md:gap-20">

              <Stats 
                number= "10"
                img= {<MdOutlineAdd />}
                comment="Years"
              />

              <Stats 
                number="1000"
                img={<MdOutlineAdd />}
                comment="Projects"
              />

              <Stats 
                number="10"
                img={<MdLocationPin />}
                comment="Locations"
              />

            </div>
          </div>

          {/*   Image section   */}
          <div className="">
            <img src={HeroImg} alt="" className="w-[350px] rounded-3xl" />
          </div>
        </div>
    </div>
  )
}

export default Hero