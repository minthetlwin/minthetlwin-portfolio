import React from "react";
import '../../assets/css/style.css';
import Ucsmdy from '../../assets/image/education/ucsmdy.jpg';
export default function Education(){
    return(
        <section className="education" id="education">

  <h1 className="heading"><i className="fas fa-graduation-cap"></i> My Education</h1>

    <p className="qoute">"Learning facts fills the mind; education teaches it to explore and question."</p>

    <div className="box-container">

    <div className="box">
        <div className="image">
        <img draggable="false" src={Ucsmdy} alt="University of Computer Studies (Mandalay)"></img>
        </div>
        <div className="content">
        <h3>Bachelor of Computer Science</h3>
        <p>University of Computer Studies (Mandalay)</p>
        <h4>2020-2026</h4>
        </div>
    </div>

</div>
</section>
    )
}