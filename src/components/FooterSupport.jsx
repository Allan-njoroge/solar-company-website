import React from 'react'

const FooterSupport = () => {

  const Links = [
    {name:"Getting started", link: ""},
    {name:"Help center", link: ""},
    {name:"Server status", link: ""},
    {name:"Report a bug", link: ""},
    {name:"Chat support", link: ""},
  ] 

  return (
    <div className="mt-10">
      <h5 className="text-xl text-green-300 mb-3">Support</h5>
      <ul>
        {Links.map((links, index) => (
          <li key={index} className="flex my-1">
            <a href={links.link} className="hover:text-gray-400">{links.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterSupport;