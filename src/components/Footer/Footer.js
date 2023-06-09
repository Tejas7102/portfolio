import React from 'react'
import './footer.css'
import {FaPhone,FaHome,FaMailBulk,FaLinkedin, FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="left">
            <h4>
                <FaHome size={20} style={{color:'white',marginRight:15}}/>
                Nadiad, India.
            </h4>
            <h4>
                <FaPhone size={20} style={{color:'white',marginRight:15}}/>
                9427494412
            </h4>
            <h4>
                <FaMailBulk size={20} style={{color:'white',marginRight:15}}/>
                tdchauhan07@gmail.com
            </h4>
        </div>
        <div className="right">
              <h4>
                About me
              </h4>
              <p>
                Hi everyone, I am Tejas Chauhan.
                Web Developer and cloud enthusiastic.
              </p>
              <div className="socialmedia">
                  <Link to="https://www.linkedin.com/in/tejas7102"><FaLinkedin style={{color:'white',marginRight:15,marginTop:10}} size={20}/></Link>
                  <Link to="https://github.com/Tejas7102"><FaGithub style={{color:'white',marginRight:15,marginTop:10}} size={20}/></Link>
                  
                  <FaLinkedin style={{color:'white',marginRight:15,marginTop:10}} size={20}/>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
