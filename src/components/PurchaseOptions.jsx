import React from 'react'

export const PurchaseOptions = ({option,value}) => {
const hola = 0;
  return (
    <div className='flex w-[336px] justify-between'>
        <p>{option}</p>
        <div className='flex flex-col text-end'>
        <p className='text-sm font-semibold not-italic'>{typeof value === 'number' ? value + ',00€' : value }</p>
        { option ==='TOTAL' ? <p className='text-xs text-slate-700'>Incluye {(value * 0.21).toFixed(2) }€ de IVA</p> : '' }
        </div>
    </div>
  )
}
