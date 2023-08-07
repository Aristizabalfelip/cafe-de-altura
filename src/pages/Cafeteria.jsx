import React from 'react'
import arrow from '../assets/arrow.png'
import cafeteria from '../assets/cafeteria.png'
import { ArrowText } from '../components/ArrowText'


export const Cafeteria = () => {
    return (
        <div className='px-10 pt-[44.61px] pb-[45.39px]'>
            <div className='flex w[1200px] justify-between items-center'>
                <section className='flex w-[457px] flex-col items-start gap-4'>
                    <h2 className='text-2xl text-greenNoHover font-medium'>Pruébalo en nuestro coffee shop</h2>
                    <p>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
                    <div> < ArrowText name='Cómo llegar' /></div>
                </section>
                <section><img src={cafeteria} alt="" /></section>
            </div>
        </div>
    )
}
