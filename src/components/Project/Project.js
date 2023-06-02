import React from 'react'
import Navbaar from '../Navbaar/Navbaar'
import Footer from '../Footer/Footer'
import Hero2 from '../Hero2/Hero2'
import Work from '../Work/Work'
import Data from '../Work/Data'
import './project.css'
function Project() {
  return (
    <div>
      <Navbaar></Navbaar>
      <Hero2 headding="Projects" text="These are some beautifull project made by me"/>
      
      <div className="p_c">
        {Data.map((val,ind)=>{
          return(
            <Work key={ind} img={val.img} title={val.title} text={val.text} source={val.source} view={val.view} source1={val.source}/>
          )
        })}
      </div>
      <div className="spliter"></div>
      <Footer></Footer>
    </div>
  )
}

export default Project
