import React from 'react'
import'./Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src="profile_img.svg" alt="" />
        <h1><span>I'm Mohammed A,</span>frontend developer based in INDIA. </h1>
        <p>l am frontend developer from Tamilnadu,INDIA with small projects experience</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>

        </div>
      
    </div>
  )
}

export default Hero
