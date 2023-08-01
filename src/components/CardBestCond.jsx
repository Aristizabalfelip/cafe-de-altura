import React from 'react'

export const CardBestCond = ({text,img,title}) => {
  return (
    <div>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}
