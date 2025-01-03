import React from 'react'
import './Contact.css'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "961f6591-0367-4347-b8c0-f84a6e04831d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
        //   console.log("Success", res);
        alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src="theme_pattern.svg" alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iure eaque accusamus dolorem! Modi quisquam non perspiciatis itaque optio porro quam nam praesentium repellendus excepturi ad earum a soluta, provident similique laboriosam maiores rerum minus accusamus quibusdam harum! In sunt maxime vitae ullam, numquam cum reiciendis quia. Consectetur, eum omnis!
                </p>
                <div className="contact-details">
                    <div className="contact-detail"><img src="mail_icon.svg" alt="" /><p>bit@gmail.com</p> </div>
                    <div className="contact-detail"><img src="call_icon.svg" alt="" /><p>+9150803421</p> </div>
                    <div className="contact-detail"><img src="location_icon" alt="" /><p>Tamilnadu, India</p> </div>
                </div>
            </div>
        
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button className="contact-submit">Submit now</button>
        </form>
        </div>
    </div>
  )
}

export default Contact
