import React, { useContext } from 'react'
import { Button } from './Button'
import {addCoffee} from '../utils/addCoffee'
import { PurchaseContext } from '../App'

export const CardInnovations = ({img,name,price}) => {
 
  const buttonStyle = 'p-2 rounded bg-greenNoHover text-white'
  const {setPurchase} = useContext(PurchaseContext)

  return (
    <div className='flex flex-col justify-end items-center p-6 gap-6 rounded-lg border'>
        <img src={img} alt="" />
        <article className='flex flex-col items-center gap-3'>
            <p>{name}</p>
            <p>{price},00 €</p>
        </article>
        < Button name={'Añadir'} buttonStyle={buttonStyle} handleClick={()=>addCoffee(img,name,price,setPurchase)}/>
    </div>
  )
}
