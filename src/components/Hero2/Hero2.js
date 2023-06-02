import React from 'react'
import './hero2.css'
function Hero2(props) {
  return (
    <div className='m_c_hero2'>
        <div className="sub_c_hero2">
            <h3>{props.headding}</h3>
            <p>{props.text}</p>    
        </div>    
    </div>
  )
}

export default Hero2
