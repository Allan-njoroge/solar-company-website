import React from 'react'
import FooterContact from '../components/FooterContact'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube, FaRegCopyright } from "react-icons/fa";
import FooterServices from '../components/FooterServices';
import FooterCompany from '../components/FooterCompany';
import FooterSupport from '../components/FooterSupport';

const Footer = () => {

    const Icons = [
        {icon:<FaFacebook /> , link:''},
        {icon:<FaInstagramSquare /> , link:''},
        {icon:<FaLinkedin /> , link:''},
        {icon:<FaYoutube /> , link:''}, 
    ]

  return (
    <div className="w-[90%] mx-auto flex justify-center">
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 pt-10 pb-20 border-b-2">
                <div className="mt-10">
                    <h1 className="text-2xl text-green-300">Solar .Co</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                    {/*     Social Media Icons      */}
                    <ul className="flex gap-5 my-5">
                        {Icons.map((icons) => (
                            <li key={icons.icon} className="text-xl">
                                <a href={icons.link} className="hover:text-gray-400">{icons.icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <FooterServices />
                <FooterCompany />
                <FooterSupport />
                <FooterContact />
            </div>

            <div className="md:flex justify-between py-2">
                <p className="flex gap-1">
                    <span className="my-auto">
                        <FaRegCopyright />
                    </span>
                    Copyright. All Rights Reserved
                </p>
                <p>Made by: Allan Njoroge</p>
            </div>
        </div>
    </div>
  )
}

export default Footer