import React from 'react'
import Navbaar from '../Navbaar/Navbaar'
import Footer from '../Footer/Footer'
import Hero2 from '../Hero2/Hero2'
import './about.css'
function About() {
  return (
    <div>
      <Navbaar/>
      <Hero2 headding="Student of CSE" text="CHARUSAT"/>
      
      <h4 class="a_h a_h1">Who am I?</h4>
      <div className="a_c_1">

        <div className="a_s_c2">
          <img src="https://yt3.googleusercontent.com/ytc/AGIKgqNmOYYmMiuo9_00VJN6jw4e86Ga07avPyEw7XQm5g=s900-c-k-c0x00ffffff-no-rj" alt="" srcset="" />
        </div>
        <div className="a_s_c1">
          <p>
            I am a student of CARUSAT university.
            I am on the way of pursuing Bachelor of Technology in the field of Computer Science and Engineering.
            Currently I am in 7th semester.
            As a computer science engineering (CSE) student, I am passionate about exploring the vast world of technology and its applications. With a strong foundation in programming, algorithms, and problem-solving, I am equipped to tackle complex challenges in software development, Web development and cloud computing. I strive to stay updated with the latest advancements in the field and continuously enhance my skills in areas such as web development, machine learning, and cybersecurity. 
          </p>
        </div>
      </div>
      <h4 class="a_h">My Interests</h4>
      <div className="a_c_1">
        
     
        <div className="a_s_c2">
          <img src="https://media.istockphoto.com/id/1277731016/photo/cloud-computing-concept-communication-network.jpg?s=612x612&w=0&k=20&c=n5cYq3RCP09eEKECwq1q9X9k8w3FfFsjL6nA009Jn3c=" alt="" srcset="" />
        </div>
        <div className="a_s_c1">
          <p>
            Doing Web development gives me joy.
            I have a strong interest in cloud computing. The ability to store, access, and manage data and applications remotely through the internet offers numerous advantages. Cloud computing allows for scalability, flexibility, and cost-efficiency by enabling businesses to utilize resources on-demand.
          </p>
        </div>
      </div>
      <div className="spliter"></div>
      <Footer/>
    </div>
  )
}

export default About
