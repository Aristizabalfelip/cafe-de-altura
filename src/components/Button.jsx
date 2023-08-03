import React from 'react'
import {changeIcon} from '../utils/changeButtIcon'

export const Button = ({name,buttonStyle, handleClick}) => {
  return (
   <button className={buttonStyle} onClick={handleClick}>
    {name === '+' || name === '-' ? <img src={changeIcon(name)} alt="" /> : name}
    </button>
  )
}
