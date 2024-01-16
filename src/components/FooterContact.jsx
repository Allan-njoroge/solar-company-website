import React from 'react'

const FooterContact = () => {

  const Links = [
    {name:"contact@company.com", link: ""},
    {name:"+254 712345678", link: ""},
    {name:"Narobi, Kenya", link: ""},
  ] 

  return (
    <div className="mt-10">
      <h5 className="text-xl text-green-300 mb-3">Contact Us</h5>
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

export default FooterContact;