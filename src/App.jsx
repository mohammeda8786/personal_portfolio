import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/hero/hero'
import About from './Components/About/About'
import Service from './Components/Services/Service'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/>
      
      
    </div>
  )
}

export default App
