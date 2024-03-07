import React from 'react'
import Hero from './sections/Hero'
import Nav from './components/Nav'
import About from './sections/About'
import Services from './sections/Services'
import Warranty from './sections/Warranty'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className="bg-black/90 text-gray-300">

      {/*   Navbar    */}
      <div className="items-center">
       <Nav />
      </div>

      {/*   sections    */}
      <div className="w-[90%] mx-auto">

        {/*   Hero    */}
        <section className="" id="Home">
          <Hero />
        </section>

        {/*   About    */}
        <section id="about">
          <About />
        </section>

        {/*   Services    */}
        <section id="services">
          <Services />
        </section>

        {/*   Warranty    */}
        <section id="warranty">
          <Warranty />
        </section>

        {/*     Contact   */}
        <section className="border-b-2 border-gay-600" id="contact">
          <Contact />
        </section>

        {/*   Footer    */}
        <section>
          <Footer />
        </section>

      </div>
    </div>
  )
}

export default App