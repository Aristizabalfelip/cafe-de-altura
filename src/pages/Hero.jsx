import React from 'react'
import { Button } from '../components/Button'
import hero from '../assets/hero.png'


export const Hero = () => {

  return (
    <div className='px-10 py-10 bg-colorHero'>
        <div className='flex gap-6 justify-center items-center '>
            <section className='flex flex-col gap-4 items-start'>
                <h3 className='text-lg font-semibold text-greenNoHover'>De la planta a tu taza</h3>
                <h1 className='text-[40px] font-semibold'>El mejor café del mundo, ahora en tu casa.</h1>
                <p>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
                <div className='flex gap-4'>
                    < Button name='Descubrir orígenes' buttonStyle='py-3 px-6 bg-coBuBlack text-white rounded'  />
                    < Button name='Comprar café' buttonStyle='py-3 px-6 bg-greenNoHover text-white rounded'/>  
                </div>
                </section>
            <section><img className='h-[364px] w-[667px]' src={hero} alt="" /></section>
        </div>
    </div>
  )
}
