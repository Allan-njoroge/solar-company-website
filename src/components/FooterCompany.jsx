import React from 'react'

const FooterCompany = () => {

  const Links = [
    {name:"About", link: ""},
    {name:"Careers", link: ""},
    {name:"Culture", link: ""},
    {name:"Blog", link: ""},
    {name:"Solar Team", link: ""},
  ] 

  return (
    <div className="mt-10">
      <h5 className="text-xl text-green-300 mb-3">Company</h5>
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

export default FooterCompany;