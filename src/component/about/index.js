import '../../assets/css/style.css';
import profileImg from '../../assets/image/profile.png';
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import resume from '../../assets/minthetlwin_resume.pdf';

export default function About(){

  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });

    return () => tiltNode.vanillaTilt.destroy(); // cleanup
  }, []);


    return(
        <section  className="about" id="about">
    <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
    
    <div className="row">

    <div className="image">
        {/* <img draggable="false" className="tilt" src="./assets/images/profile2.jpg" alt=""> */}
        <img draggable="false"  ref={tiltRef} classNameName="tilt" src={profileImg} alt="MinThetLwin'sProfileImg"></img>
    </div>
    <div className="content">
        <h3>I'm Min Thet Lwin</h3>
        <span className="tag">Full Stack Developer</span>
        
        <p>I'm a Full-Stack Developer from Mandalay, Myanmar.
I specialize in Laravel for backend development, building robust APIs and dynamic server-side applications.
For frontend, I use React.js to create responsive, modern user interfaces.
I enjoy combining both frontend and backend skills to deliver end-to-end solutions, from databases to interactive web applications.
My goal is to continuously improve my skills and develop innovative web apps using the latest technologies.</p>
        
        <div className="box-container">
            <div className="box">
              <p><span> age: </span> 22</p>
              <p><span> phone : </span>+959787950760</p>
            </div>
            <div className="box">
              <p><span> email : </span> minnthetlwinmtll31@gmail.com</p>
              <p><span> place : </span> Mandalay, Myanmar</p>
            </div>
        </div>
        
        <div className="resumebtn">
            <a href={resume} target="_blank" className="btn"><span>Resume</span>
                <i className="fas fa-chevron-right"></i>
            </a>
        </div>

    </div>
    </div>
</section>
    )
}