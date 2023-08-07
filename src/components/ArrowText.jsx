import React from 'react'
import arrow from '../assets/arrow.png'

export const ArrowText = ({ name, styleP }) => {
  return (
    <div className='flex items-center gap-4'>
      <p className={styleP}>{name}</p>
      <img src={arrow} alt="" />
    </div>
  )
};
