import React from 'react'

export const ShippingOption = ({ typeShip, descShip, price, handleClick, value }) => {

  return (
    <div className='flex items-center gap-4 self-stretch'> 
      {value === 'option1' ? <input type="radio" className='accent-greenNoHover  w-4 h-4' onClick={handleClick} value={value} name="sendingGroup" defaultChecked/>
       : <input type="radio" className='accent-greenNoHover w-4 h-4' onClick={handleClick} value={value} name="sendingGroup" />}
      <section className='w-[657px]' >
        <p className='font-semibold'>{typeShip}</p>
        <p>{descShip}</p>
      </section>
      <p className='text-lg font-semibold'>{price}</p>
    </div>
  )
}
