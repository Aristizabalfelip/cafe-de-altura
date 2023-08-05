import React, { useEffect, useState } from 'react'
import { asynFunction } from '../utils/asynFunction'
import { innovationCoffeeFilters } from '../utils/filterMethods'
import { CardInnovations } from '../components/CardInnovations'
import { ArrowText } from '../components/ArrowText'


export const Innovations = () => {

    const [arrayProductsCoffees, setArrayProductsCoffees] = useState([]) 
    const coffees = ['Costa Rica Tarrazú', 'Colombia Los Naranjos', 'Laos Amanecer', 'Etiopía Yrgacheff']
 

    useEffect(() => {
        asynFunction('https://cafe-de-altura.vercel.app/api/products').then(res => setArrayProductsCoffees(res.products))

    }, [])

    return (
        <div className='flex flex-col p-10 items-center gap-10 '>
            <h2 className='flex justify-center text-2xl font-medium text-greenNoHover'>Novedades</h2>
            <div className='flex p-10 gap-10'>
                {
                    innovationCoffeeFilters(coffees, arrayProductsCoffees).map((coffee, i) => {
                        return <CardInnovations
                            key={i}
                            img={coffee.img_url}
                            name={coffee.brand}
                            price={coffee.price}
                        />
                    })
                }
            </div>
           < ArrowText name='Ver todos' />
        </div>
    )
}
