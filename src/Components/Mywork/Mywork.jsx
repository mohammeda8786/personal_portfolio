import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'

const Mywork = () => {
  return (
      <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My Latest work</h1>
            <img src="theme_pattern.svg" alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}

        </div>
        <div className="mywork-showmore">
          <p>Show more</p>
          <img src="arrow_icon.svg" alt="" />
        </div>
      </div>
  )
}

export default Mywork