import React, { useEffect, useState } from 'react'
import { asynFunction } from '../utils/asynFunction'
import { CardInnovations } from './CardInnovations';

export const OriginShop = () => {

    const [arrayCoffees, setArrayCoffees] = useState([])

    useEffect(() => {
        asynFunction('https://cafe-de-altura.vercel.app/api/products').then(res => setArrayCoffees(res.products))

    }, [])

  return (
    <div className='flex flex-col p-10 items-center gap-6'>
        <h2 className='flex justify-center text-2xl font-medium text-greenNoHover'>Últimos orígenes</h2>
        <div className='flex flex-wrap gap-6 w-[1200px]'>
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
