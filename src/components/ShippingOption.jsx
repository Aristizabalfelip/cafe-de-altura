import React from 'react'

export const ShippingOption = ({ typeShip, descShip, price, handleClick, value }) => {

  return (


    <div className='flex items-center gap-4 self-stretch'>
      
      {value === 'option1' ? <input type="radio" onClick={handleClick} value={value} name="sendingGroup" defaultChecked/>
       : <input type="radio" onClick={handleClick} value={value} name="sendingGroup" />}
      <section>
        <p>{typeShip}</p>
        <p>{descShip}</p>
      </section>
      <p>{price}</p>
    </div>
  )
}
