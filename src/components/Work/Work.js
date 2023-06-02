import React from 'react'
import { Link } from 'react-router-dom'
import './work.css'
function Work(props) {
  return (
    <div className='workcontainer'>
        <div className="s1_workcontainer">
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            
        </div>  
        
        <Link to={props.view} className="btn view">View</Link>
        <Link to={props.source1} className="btn source">Source</Link>
    </div>
  )
}

export default Work
