import React from 'react'
import Navbaar from '../Navbaar/Navbaar'
import Footer from '../Footer/Footer'
import Hero2 from '../Hero2/Hero2'
function Project() {
  return (
    <div>
      <Navbaar></Navbaar>
      <Hero2 headding="Projects" text="These are some beautifull project made by me"/>
      <div className="spliter"></div>
      <Footer></Footer>
    </div>
  )
}

export default Project
