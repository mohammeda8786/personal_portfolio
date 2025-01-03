import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-left">
                <img src="footer_logo.svg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis hic praesentium ratione consequatur debitis facere repudiandae culpa nesciunt expedita quaerat deserunt repellendus dolorem.!</p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src="user_icon.svg" alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">2023 mohammed. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
