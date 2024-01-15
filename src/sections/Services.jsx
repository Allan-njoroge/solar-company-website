import React from 'react'
import ServiceCards from '../components/ServiceCards'
import { MdOutlineCable } from 'react-icons/md'
import { TiSpanner } from "react-icons/ti";
import { GiBroom } from "react-icons/gi";

const Services = () => {
  return (
    <div className="flex justify-center w-[90%] py-10 md:py-20 mx-auto">
      <div>
        <h1 className="text-3xl md:text-5xl text-green-300 flex justify-center">Our Services</h1>

        <div className="grid grid-col2-1 md:grid-cols-2 lg:grid-cols-3 py-10 md:py-20 gap-10">
        <ServiceCards 
          image={<MdOutlineCable />}
          title="Installation"
          explanation="Expert installation for your solar panels needs. Whether commercial or residential"
        />

        <ServiceCards 
          image={<TiSpanner />}
          title="Maintenance"
          explanation="Effecient maintenace services to ensure your solar panels perform optimally"
        />

        <ServiceCards 
          image={<GiBroom />}
          title="Cleaning"
          explanation="Thorough cleaning services to keep your solar panels bright"
        />
        </div>
      </div>
    </div>
  )
}

export default Services