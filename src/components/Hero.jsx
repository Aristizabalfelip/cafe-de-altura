import React from 'react'
import { Button } from './Button'
import hero from '../assets/hero.png'

export const Hero = () => {

  return (
    <div className='px-10 py-10'>
        <div className='flex gap-6'>
            <section className='flex flex-col gap-4'>
                <h3>De la planta a tu taza</h3>
                <h1>El mejor café del mundo, ahora en tu casa.</h1>
                <p>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
                <div>
                    < Button name={'Descubrir orígenes'}/>
                    < Button name={'Comprar café'}/>
                </div>
                </section>
            <section><img src={hero} alt="" /></section>
        </div>
    </div>
  )
}
