import React from 'react'
import './Hero.css'
import bgimg from'../assest/HeroBg.jpg'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='hero'>
        <div className="mask">
            <img className="into-img" src={bgimg} alt="" />
            </div>
        <div className="content">
            <p>HI, I'M TEJAS CHAUHAN</p>
            <h2>Web Developer & Cloud Engineer</h2>
            <div className='button'>
                <Link to='/project' className='btn b1'>Project</Link>
                <Link to='/about' className='btn bt-light b1'>About</Link>
            </div>
            </div>     
    </div>
  )
}

export default Hero
