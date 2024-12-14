import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Navbar/Hero/Hero'
import Program from './component/Navbar/Programs/Program'
import Title from './component/Navbar/Title/Title'
import About from './component/Navbar/About/About'
import Campus from './component/Navbar/Campus/Campus'
import Testimonials from './component/Testimonials/Testimonials'
import Contact from './component/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'Our program' title = 'What we offer'/>
      <Program/>
      <About/>
      <Title subTitle = 'Gallery' title = 'Campus photos'/>
      <Campus/>
      <Title subTitle = 'Testimonials' title = 'what Student says'/>
      <Testimonials/>
      <Title subTitle = 'Contact Us' title = 'Get in touch'/>

      <Contact/>
      </div>
      
    </div>
  )
}

export default App
