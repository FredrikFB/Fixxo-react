import React from 'react'

const InfoIcons = ({img, title, paragraph}) => {
  return (
    
    <div className="info-box col">
        <img src={img} alt="" />
        <div className="info-text">
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default InfoIcons