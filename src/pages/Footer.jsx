import React from 'react'
import cup from '../assets/cup.png'
import telWhi from '../assets/telWhi.png'
import MailWh from '../assets/MailWh.png'
import { NavList } from '../components/NavList'
import { ButtonContact } from '../components/ButtonContact'
import { RightsReserved } from '../components/RightsReserved'


export const Footer = () => {
    const menuNav = ['Tienda', 'Suscripción', 'Para empresas', 'Sobre nosotros', 'Contacto']
    const cookiesList = ['Política de privacidad', 'Política de cookies', 'Términos y condiciones']

    return (
        <div className='flex flex-col justify-end items-center gap-[37.732px] pt-[28.607px] pb-[29.607px] bg-coBuBlack text-white font-medium'>
            <section className='flex w-[1200px] flex-col items-start gap-4'>
                <div className='flex gap-2'><p className='text-2xl font-normal'>cafedealtura.com</p><img className='h-7 w-6' src={cup} alt="" /></div>
                <div className=' grid grid-cols-3  w-[1132px] gap-x-8 '>
                    <div className='flex flex-col items-start gap-4  '>
                        <h3 className='text-lg '>Te ayudamos en</h3>
                        < ButtonContact name={'+34 919 49 05 18'} img={telWhi} styleBu='flex gap-2 py-3 px-6 bg-coBuSe rounded' />
                        < ButtonContact name={'hola@cafedealtura.com'} img={MailWh} styleBu='flex gap-2 py-3 px-6 bg-coBuSe rounded' />
                    </div>
                    <ul className='inline-flex gap-4 flex-col w-[120px]'>
                        {menuNav.map((option, i) => { return <NavList key={i} name={option} /> })}
                    </ul>

                    <ul className='flex gap-4 flex-col'>
                        {cookiesList.map((option, i) => { return <NavList key={i} name={option} /> })}
                    </ul>
                </div>
            </section>
        
        </div>
    ) 
}
