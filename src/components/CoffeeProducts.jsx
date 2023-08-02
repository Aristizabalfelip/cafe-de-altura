import React, { useContext } from 'react'
import {cartButtonFuntion} from '../utils/addCoffee'
import { Button } from './Button'
import { PurchaseContext } from '../App'

 
export const CoffeeProducts = ({quantity,img,name,price}) => {
    const {setPurchase} = useContext(PurchaseContext)
    
    return (
        <div className='flex items-start gap-6'>
            <section className='flex content-center items-center gap-2 self-stretch'>
                < Button name={'-'} handleClick={()=>cartButtonFuntion('-',setPurchase,name)}/><p>{quantity}</p><Button  name={'+'} handleClick={()=>cartButtonFuntion('+',setPurchase,name)} />
            </section>
            <img className='w-[55.66px]' src={img} alt="" />
            <section className='flex flex-col gap-1 w-[506.34px]'>
                <p>{name}</p>
                <p>Paquete de café, 250 gr</p>
            </section>
            <p>{price},00 €</p>
            <hr className='text-colorHero'/>
      
        </div>
    )
}
