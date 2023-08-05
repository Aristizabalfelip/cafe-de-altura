import React from 'react'

export const ButtonContact = ({ name, img, styleBu }) => {
  return (
    <button className={styleBu}>
      <img src={img} alt="" /> <p>{name}</p>
    </button>
  )
}

