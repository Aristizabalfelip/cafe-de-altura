import React, { useEffect, useState } from 'react'
import { asynFunction } from '../utils/asynFunction'
import { CardInnovations } from './CardInnovations';

export const OriginShop = () => {

    const [arrayCoffees, setArrayCoffees] = useState([])
console.log(arrayCoffees);
    useEffect(() => {
        asynFunction('https://cafe-de-altura.vercel.app/api/products').then(res => setArrayCoffees(res.products))

    }, [])

  return (
    <div>
        <h2>Últimos orígenes</h2>
        <div className='flex flex-wrap'>
        {
          arrayCoffees.map((coffee,i) => {
            return <CardInnovations 
            key={i}
            img={coffee.img_url}
            name={coffee.brand}
            price={coffee.price}
            />
          })
        }
        </div>
        
    </div>
  )
}
