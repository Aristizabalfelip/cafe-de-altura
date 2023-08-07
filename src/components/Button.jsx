import React from 'react'
import { changeIcon } from '../utils/changeButtIcon'
import { Link } from 'react-router-dom'
import {convertPaths} from '../utils/convertPaths' 



export const Button = ({ name, buttonStyle, handleClick }) => {
  return (
      <Link to={convertPaths(name)}><button className={buttonStyle} onClick={handleClick}>
        {name === '+' || name === '-' ? <img src={changeIcon(name)} alt="" /> : name}
      </button></Link>
  )
};
