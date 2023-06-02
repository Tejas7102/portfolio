import React from 'react'
import Navbaar from '../Navbaar/Navbaar'
import Footer from '../Footer/Footer'
import Hero2 from '../Hero2/Hero2'
function About() {
  return (
    <div>
      <Navbaar/>
      <Hero2 headding="Student of CSE" text="CHARUSAT"/>
      <div className="spliter"></div>
      <Footer/>
    </div>
  )
}

export default About
