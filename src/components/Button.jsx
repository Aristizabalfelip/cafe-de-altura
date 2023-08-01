import React from 'react'

export const Button = ({name,buttonStyle, handleClick}) => {
  return (
   <button className={buttonStyle} onClick={handleClick}>{name}</button>
  )
}
