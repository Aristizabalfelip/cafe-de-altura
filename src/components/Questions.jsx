import React from 'react'
import dropDown from '../assets/dropDown.png'

export const Questions = ({name,text}) => {
  return (
    <div>
      <article>
        <h3>{name}</h3>
        <button><img src={dropDown} alt="" /></button>
      </article>
      <hr />
      <article>
        <p>{text}</p>
        </article>
    </div>
  )
}

