import React from 'react'
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto flex justify-center">
      <div className="w-full my-10 md:my-16">
        <h1 className="text-center text-2xl md:text-4xl">
          Have A Project In Mind?
          <br />
          Let's Go To Work
        </h1>

        <form className="w-full my-10 text-center">
          <div>
            <input type="text"  id="fullName" placeholder="John Doe" className="md:w-1/2 w-full mb-6 focus:outline-none bg-transparent py-2 px-3 border-2 border-green-300 rounded-md"/>
          </div>

          <div>
            <input type="email"  id="email" placeholder="JohnDoe@gmail.com" className="md:w-1/2 w-full mb-6 focus:outline-none bg-transparent py-2 px-3 border-2 border-green-300 rounded-md" />
          </div>

          <div>
            <input type="number"  id="phoneNumber" placeholder="+254 712345678" className="md:w-1/2 w-full mb-6 focus:outline-none bg-transparent py-2 px-3 border-2 border-green-300 rounded-md"/>
          </div>

          <div>
            <textarea type="text"  id="message" cols="0" rows="10" placeholder="Type your message here..." className="md:w-1/2 w-full mb-6 focus:outline-none bg-transparent py-2 px-3 border-2 border-green-300 rounded-md"></textarea>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="px-3 py-2 bg-green-300 border-2 border-green-300 rounded-md text-black/90 hover:bg-transparent hover:text-green-300 flex gap-3" >
              Send Message 
              <span className="my-auto">< FaEnvelope/></span>
            </button>
          </div>
        </form>
      </div>
    </div>    
  )
}

export default Contact