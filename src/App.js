import React from 'react'
import './index.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/project" element ={<Project/>}/>
     </Routes>
    </div>
  );
}

export default App;
