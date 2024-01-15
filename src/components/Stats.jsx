import React from 'react'

const Stats = ({number, img, comment}) => {
  return (
    <div>
        <h1 className="font-semibold text-3xl flex">{number}<span className="text-green-300 my-auto">{img}</span></h1>
        <p className="text-xl text-gray-400">{comment}</p>
    </div>
  )
}

export default Stats