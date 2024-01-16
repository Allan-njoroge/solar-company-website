import React from 'react'

const FooterService = () => {

  const Links = [
    {name:"Features", link: ""},
    {name:"Pricing", link: ""},
    {name:"Projects", link: ""},
    {name:"Reviews", link: ""},
    {name:"Updates", link: ""},
  ] 

  return (
    <div className="mt-10">
      <h5 className="text-xl text-green-300 mb-3">Services</h5>
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

export default FooterService;