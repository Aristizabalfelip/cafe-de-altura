import React from 'react'
import { Questions } from '../components/Questions'
import { ArrowText } from '../components/ArrowText'

export const FrequentQuestions = () => {
  return (
    <div className='bg-greenNoHover py-12 px-[386px] flex flex-col gap-6 items-center  '>
        <h2 className='flex justify-center text-2xl font-medium text-white'>Preguntas frecuentes</h2>
        <div className='flex flex-col gap-4 '>
            < Questions name={'¿Cómo hago el pedido?'} text={'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'}/>
            < Questions name={'¿Por qué los precios son tan bajos?'} text={'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'}/>
            < Questions name={'¿Es posible enviar café a mi oficina?'} />
        </div>
        < ArrowText name='Resolvemos tus dudas' styleP='text-white font-semibold<'/>
    </div>
  )
}
