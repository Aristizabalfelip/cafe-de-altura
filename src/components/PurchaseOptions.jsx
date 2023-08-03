import React from 'react'

export const PurchaseOptions = ({option,value}) => {
  return (
    <div className='flex w-[336px] justify-between'>
        <p>{option}</p>
        <p>{value}</p>
    </div>
  )
}
