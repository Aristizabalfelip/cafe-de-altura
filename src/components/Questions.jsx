import React from 'react'
import dropDown from '../assets/dropDown.png'

export const Questions = ({ name, text }) => {
  return (
    <div className='bg-white flex flex-col p-6 gap-4 w-[668px] rounded-xl '>
      <article className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <button><img src={dropDown} alt="" /></button>
      </article>
      <hr />
      <article>
        <p>{text}</p>
      </article>
    </div>
  )
}

