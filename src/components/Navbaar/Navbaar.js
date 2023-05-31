import React ,{useState} from 'react'
import './navbaar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
function Navbaar() {
  const [click,setClick]=useState(false);
  const [color,setColor]=useState(false);
  const change_color =()=>{
    if(window.scrollY>=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }; 
  window.addEventListener('scroll',change_color)
  const handleOnClick  =()=>{
    setClick(!click)
  }
  return (
    <div className={color?'header-bg':'header'}>
      <Link to="/"><h1>
        Portfolio
        </h1></Link>
        <ul className={click?"active":"nav-menue"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
        <div className="ham" onClick={handleOnClick}>
          {click ? (<FaTimes size={20} style={{color:'#fff'}}/>):(<FaBars size={20} style={{color:'#fff'}}/>)}
          
          
        </div>
    </div>
  )
}

export default Navbaar
