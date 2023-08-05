import React from 'react'
import { CardBestCond } from '../components/CardBestCond'
import check from '../assets/check.png'
import truck from '../assets/truck.png'
import gift from '../assets/gift.png'


export const Conditions = () => {
  return (
    <div className='bg-custom-image bg-cover bg-center bg-no-repeat flex flex-col gap-6 px-[147px] py-12 justify-center items-center self-stretch ' >
      <h2 className='text-2xl text-white  '>Café con las mejores condiciones</h2>
      <div className='flex gap-6 justify-center'>
        <CardBestCond
          text={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana. '}
          img={check} title={'Recibe tu pedido sin preocuparte'} />
        <CardBestCond
          text={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'}
          img={truck} title={'Envío en 24/48h'} />
        <CardBestCond
          text={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'}
          img={gift} title={'Descuentos y beneficios'} />
      </div>
    </div>
  )
}
