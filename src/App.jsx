import React from 'react'
import Hero from './sections/Hero'
import Nav from './components/Nav'
import About from './sections/About'
import Services from './sections/Services'
import Warranty from './sections/Warranty'
import Contact from './sections/Contact'

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
        <section className="">
          <Hero />
        </section>

        {/*   About    */}
        <section>
          <About />
        </section>

        {/*   Services    */}
        <section>
          <Services />
        </section>

        {/*   Warranty    */}
        <section>
          <Warranty />
        </section>

        {/*     Contact   */}
        <section>
          <Contact />
        </section>

        {/*   Footer    */}
        <section>
        </section>

      </div>
    </div>
  )
}

export default App