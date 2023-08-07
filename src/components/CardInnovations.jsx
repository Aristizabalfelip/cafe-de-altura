import React, { useContext } from 'react'
import { Button } from './Button'
import {addCoffee} from '../utils/addCoffee'
import { PurchaseContext } from '../App'

export const CardInnovations = ({img,name,price}) => {
 
  const buttonStyle = 'p-2 rounded bg-noHover text-white hover:bg-greenNoHover';
  const {setPurchase } = useContext(PurchaseContext);

  return (
    <div className='flex flex-col justify-end items-center p-6 gap-6 rounded-lg border hover:bg-selBagCo transition duration-300 ease-in-out'>
        <img src={img} alt="" />
        <article className='flex flex-col items-center gap-3'>
            <p className='font-semibold'>{name}</p>
            <p>{(price.toFixed(2)).replace(".", ",")} €</p>
        </article>
        < Button name={'Añadir'} buttonStyle={buttonStyle} handleClick={()=>addCoffee(img,name,price,setPurchase)}/>
    </div>
  )
};
