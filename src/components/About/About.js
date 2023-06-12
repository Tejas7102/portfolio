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
      
      <h4 className="a_h a_h1">Who am I?</h4>
      <div className="a_c_1">

        <div className="a_s_c2">
          <img src="https://yt3.googleusercontent.com/ytc/AGIKgqNmOYYmMiuo9_00VJN6jw4e86Ga07avPyEw7XQm5g=s900-c-k-c0x00ffffff-no-rj" alt="" srcset="" />
        </div>
        <div className="a_s_c1">
          <p>
          I am Tejas Chauhan, a dedicated and hardworking student currently pursuing my education at Charusat University. I am in my 7th semester, and I have consistently maintained an impressive CGPA of 8.83 throughout my academic journey.
            As a computer science engineering (CSE) student, I am passionate about exploring the vast world of technology and its applications. With a strong foundation in programming, algorithms, and problem-solving, I am equipped to tackle complex challenges in software development, Web development and cloud computing. I strive to stay updated with the latest advancements in the field and continuously enhance my skills in areas such as web development, machine learning, and cybersecurity. 
          </p>
        </div>
      </div>
      <h4 className="a_h">My Interests</h4>
      <div className="a_c_1">
        
     
        <div className="a_s_c2">
          <img src="https://i.pcmag.com/imagery/articles/01nZo4Ot4FUIqaAccrCZGN9-14..v1592943584.jpg" alt="" srcset="" />
        </div>
        <div className="a_s_c1">
          <p>
          I am highly interested in web development and cloud computing. I have a strong foundation in web development, including HTML, CSS, JavaScript, and frameworks like ReactJS. I am also proficient in back-end development using Node.js and databases like MySQL and MongoDB. Additionally, I have been actively learning about cloud platforms such as AWS and Azure. I have experience deploying applications on the cloud, utilizing services like virtual machines, serverless computing, and containers. My goal is to create efficient and secure web applications that leverage the power of the cloud.
          </p>
        </div>
      </div>
      <div className="spliter"></div>
      <Footer/>
    </div>
  )
}

export default About
