import React from 'react'

export const CardBestCond = ({ text, img, title }) => {
  return (
    <div
      className=
      'flex flex-col  gap-4 bg-white p-6 rounded-lg justify-center items-center  w-[316px] text-center'>
      <img className='w-16  h-16' src={img} alt="" />
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p >{text}</p>
    </div>
  )
};
