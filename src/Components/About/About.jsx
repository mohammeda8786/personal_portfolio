import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="theme_pattern.svg" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src="profile_img.svg" alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minima fuga beatae natus, perspiciatis laudantium suscipit quod repellat animi assumenda minus, incidunt reprehenderit nam obcaecati dolore nihil ducimus deserunt sint.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam ipsam placeat obcaecati dolor, modi rem, voluptates vitae consectetur provident minus? Qui magni, aperiam dolore porro minima veniam tempora ex.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React js</p>
                        <hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JAVA SCRIPT</p>
                        <hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>NEXT JS</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>0</h1>
                    <p>years of experience</p>
                </div>
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <div className="about-achievement">
                    <h1>0</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        
      
    </div>
  )
}

export default About
