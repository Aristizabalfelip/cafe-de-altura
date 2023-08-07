import React from 'react'

export const PurchaseOptions = ({ option, value }) => {

  const functionChange = (option, value) => {
    if (option === 'ENVÍO') {
      return value === 0  ? 'GRATIS' : `${(value.toFixed(2)).replace(".", ",")} €`
    } else {
      return    value > 0 ? `${(value?.toFixed(2)).replace(".", ",")} €` :''
    }

  }
 
  return (
    <div className='flex w-[336px] justify-between'>
      <p>{option}</p>
      <div className='flex flex-col text-end'>
        <p className='text-sm font-semibold not-italic'>{functionChange(option, value)}</p>

        {option === 'TOTAL' ? <p className='text-xs text-slate-700'>
          Incluye {value === undefined ? 0 :  (value * 0.21).toFixed(2).replace(".", ",") }€ de IVA
        </p> : ''
        }
      </div>
    </div>
  )
}
