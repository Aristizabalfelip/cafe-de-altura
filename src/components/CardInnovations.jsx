import React from 'react'
import { Button } from './Button'

export const CardInnovations = ({img,name,price}) => {
  return (
    <div>
        <img src={img} alt="" />
        <article>
            <p>{name}</p>
            <p>{price}</p>
        </article>
        < Button name={'Añadir'} />
    </div>
  )
}
