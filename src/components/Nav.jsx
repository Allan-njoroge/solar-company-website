import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { MdPerson2 } from 'react-icons/md'
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {

  const Links = [
    {name:"Home", link:"home"},
    {name:"About Us", link:"about"},
    {name:"Contact", link:"contact"},
    {name:"Privacy policy", link:""},
  ]

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 text-gray-300 border-b border-green-300">
      <div className="md:flex py-4 md:px-10 px-5 items-center justify-between max-w-[1440px] mx-auto">

        {/*   Logo area   */}
        <div className="text-3xl flex items-center font-bold text-green-300">
          Solar .Co
        </div>

        {/*   Open and Close menu icons   */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden transiton-all ease-in duration-700">
          { menuOpen ? <RiCloseFill /> : <RiMenu3Fill /> }
        </div>

        {/*   Navbar links    */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-green-300 md:z-auto z-10 left-0 w-[50%] md:w-auto h-screen md:h-16 md:pl-0 pl-9 transition-all ease-in duration-700 ${menuOpen ? 'top-16 opacity-100' : 'left-[-490px] opacity-0 md:opacity-100'}`}>
          {
            Links.map((Links) => (
              <li key={Links.name} className="md:ml-8 text-xl md:my-0 my-7 text-black/90 md:text-gray-300 md:hover:-mt-2 mr-2">
                <ScrollLink 
                activeClass="active"
                to={Links.link}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href={Links.link} 
                className="py-4 px-2 hover:text-green-300 duration-300"
                >
                  {Links.name}
                </ScrollLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Nav