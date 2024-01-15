import React from 'react'
import sectionTwo from '../assets/images/section-two.jpg'
import { FaSolarPanel, FaGlobe } from 'react-icons/fa'
import { MdOutlineCable } from 'react-icons/md'

const About = () => {
  return (
    <div className="flex justify-center md:py-20 py-10 w-[90%] mx-auto">
        <div className="md:flex justify-between gap-5">

          {/*   Image section   */}
          <div className="pt-0 md:pt-10">
            <img src={sectionTwo} alt="" className="w-[350px] rounded-3xl" />
          </div>

          {/*   Text Area   */}
          <div className=" pt-10 md:w-[55%]">
            <p className="md:mb-5 text-gray-400">SWITCH TO GREEN</p>

            <h1 className="text-3xl md:text-5xl md:mt-0 mt-12 mb-6 md:my-10 font-bold">
              Switching To <span className="text-green-300">Green</span> Energy Has Never Been Easier
            </h1>

            <div>

              <div className="flex gap-5">
                <div className="text-3xl my-auto text-green-300">
                  <FaSolarPanel />
                </div>
                <div>
                  <h5 className="font-semibold md:text-2xl text-xl">New Solar Panels</h5>
                  <p className="text-md text-gray-400">
                    Discover new high-effeciency solar panel models fro maximum <br /> energy output.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 my-4">
                <div className="text-3xl my-auto text-green-300">
                  <FaGlobe />
                </div>
                <div>
                  <h5 className="font-semibold md:text-2xl text-xl">Regional Incentives</h5>
                  <p className="text-md text-gray-400">
                    Take advantage of Regional incentives for cost saivingon installation.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-3xl my-auto text-green-300">
                  <MdOutlineCable />
                </div>
                <div>
                  <h5 className="font-semibold md:text-2xl text-xl">Installation by our experts</h5>
                  <p className="text-md text-gray-400">
                    Expert installation by qualified and experienced professionals for optimal performance.
                  </p>
                </div>
              </div>

            </div>
            <button className="mt-6 md:mt-10 text-xl md:px-4 px-3 md:py-3 py-2 bg-green-300 rounded-md text-black/90">Try now</button>
          </div>
        </div>
    </div>
  )
}

export default About