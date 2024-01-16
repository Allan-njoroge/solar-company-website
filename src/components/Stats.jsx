import React from 'react'

const Stats = ({number, img, comment}) => {
  return (
    <div className="flex justify-center">
      <div className="my-5 md:my-0 flex md:block">
          <h1 className="font-semibold text-3xl flex">{number}<span className="text-green-300 my-auto">{img}</span></h1>
          <p className="text-xl text-gray-400 my-auto">{comment}</p>
      </div>
    </div>
  )
}

export default Stats