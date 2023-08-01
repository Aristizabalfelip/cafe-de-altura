import React from 'react'
import { Questions } from './Questions'

export const FrequentQuestions = () => {
  return (
    <div>
        <h2>Preguntas frecuentes</h2>
        <div>
            < Questions name={'¿Cómo hago el pedido?'} text={'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'}/>
            < Questions name={'¿Por qué los precios son tan bajos?'} text={'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'}/>
            < Questions name={'¿Es posible enviar café a mi oficina?'} />
        </div>
    </div>
  )
}
