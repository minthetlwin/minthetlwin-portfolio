import React from "react";
import '../../assets/css/style.css';
import java from '../../assets/image/skill/icons8-java-48.png';
import php from '../../assets/image/skill/icons8-php-64.png';
import python from '../../assets/image/skill/icons8-python-48.png';
import cplus from '../../assets/image/skill/icons8-c-48.png';
import cshark from '../../assets/image/skill/icons8-cshar-48.png';
import react from '../../assets/image/skill/icons8-react-native-48.png';
import html from '../../assets/image/skill/icons8-html5-48.png';
import css from '../../assets/image/skill/icons8-css-48.png';
import javascript from '../../assets/image/skill/icons8-javascript-48.png';
import mysql from '../../assets/image/skill/icons8-mysql-48.png';
import github from '../../assets/image/skill/icons8-github-48.png';
import laravel from '../../assets/image/skill/icons8-laravel-64.png';


export default function Skill(){
    return(
        <section className="skills" id="skills">

    <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>

    <div className="container">
          <div className="row" id="skillsContainer">

            <div className="bar">
              <div className="info">
                <img src={java}/>
                <span>Java</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={php}/>
                <span>PHP</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={laravel}/>
                <span>Laravel</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={python}/>
                <span>Python</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={cplus}/>
                <span>C++</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={cshark}/>
                <span>C#</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={react}/>
                <span>React Js</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={html}/>
                <span>HTML5</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={css}/>
                <span>CSS3</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={javascript}/>
                <span>Javascript</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={mysql}/>
                <span>My Sql</span>
              </div>
            </div> 
            <div className="bar">
              <div className="info">
                <img src={github}/>
                <span>GitHub</span>
              </div>
            </div> 

      </div>
</div>
</section>
    )
}