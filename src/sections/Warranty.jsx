import React from 'react'
import sectionThree from '../assets/images/section-three.jpg'
import { FaPhoneAlt } from "react-icons/fa";

const Warranty = () => {
  return (
    <div className="flex justify-center md:py-20 py-10 w-[90%] mx-auto">
        <div>

            <h1 className="flex justify-center md:mb-20 mb-10 text-green-300 text-3xl md:text-5xl">Warranty</h1>

            <div className="flex justify-between flex-col-reverse md:flex-row">

            {/*   Text Area   */}
            <div className="py-10 md:w-[55%]">
                <h1 className="text-3xl md:text-5xl md:mt-0 mt-12 mb-6 md:my-10 font-bold">
                Our Systems Are Guaranteed For 20 Years
                </h1>

                <p className="mb-6 md:mb-10 md:text-xl text-md text-gray-500">
                Solar panels have become a popular solution for those seeking renewable energy solutions. High quality solar panels are designed to last for decades with a guaranteed lifespan of 20 years or more. 
                <br /> <br />
                This long lifespan is due to the durability and quality of materials used in thier construction, as well as advanced manufacturing processes used to produce them. In addition to their longevity, these panels are highly effecient, meaning they can produce a significant amount of energy.
                </p>

                <button className="text-xl md:px-4 px-3 md:py-3 py-2 border-2 border-green-300 rounded-md text-green-300 flex transition-all ease-in-out duration-500 hover:bg-green-300 hover:text-black/90">
                    Call Now 
                    <span className="ml-3 my-auto">
                        <FaPhoneAlt />
                    </span>
                </button>
            </div>

            {/*   Image section   */}
            <div className="">
                <img src={sectionThree} alt="" className="w-[350px] rounded-3xl" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Warranty