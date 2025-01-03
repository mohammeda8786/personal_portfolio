import React from 'react'
import './Service.css'
import Services_Data from '../../../public/services_data'
const Service = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My services</h1>
            <img src="theme_pattern.svg" alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((Service,index)=>{
                    return <div key={index} className="Services-format">
                        <h3>{Service.s_no}</h3>
                        <h2>{Service.s_name}</h2>
                        <p>{Service.s_desc}</p>
                        <div className='services-readmore'>
                        <p>Read More</p>
                        <img src="arrow_icon.svg" alt="" />
                        </div>
                    </div>
                })}
            </div>
    </div>
  )
}

export default Service
