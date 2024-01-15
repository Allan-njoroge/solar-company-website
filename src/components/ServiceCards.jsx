import React from 'react'

const ServiceCards = ({image, title, explanation}) => {
  return (
    <div className="p-5 shadow-md shadow-green-300/20 rounded-3xl h-[400px]">
        {/*     Card Logo       */}
        <div className="text-center flex justify-center">
          <div className="bg-black/90 p-6 rounded-full text-5xl my-5 text-green-300">
            {image}
          </div>
        </div>

        {/*     Card Text       */}
        <div className="text-center pb-10">
            <h1 className="font-semibold text-3xl text-gray-300 my-5">{title}</h1>
            <p className="text-xl text-gray-400">{explanation}</p>
        </div>
    </div>
  )
}

export default ServiceCards