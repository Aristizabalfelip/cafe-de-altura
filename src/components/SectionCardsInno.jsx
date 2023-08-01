import React from 'react'
import { CardBestCond } from './CardBestCond'
import check from '../assets/check.png'
import truck from '../assets/truck.png'
import gift from '../assets/gift.png'


export const SectionCardsInno = () => {
  return (
    <div className='flex flex-col gap-6 px-[147px] py-12'>
        <h2>Café con las mejores condiciones</h2>
        <div className='flex '>
            <CardBestCond 
            text={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana. '} 
            img={check} title={'Recibe tu pedido sin preocuparte'}/>
            <CardBestCond 
            text={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'}
            img={truck} title={'Envío en 24/48h'}/>
            <CardBestCond 
            text={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'}
             img={gift} title={'Descuentos y beneficios'}/>   
        </div>
    </div>
  )
}
