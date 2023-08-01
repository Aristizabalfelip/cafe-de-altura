import React from 'react'
import { NavList } from './NavList'
import { Button } from './Button'
import telWhi from '../assets/telWhi.png' 
import cup from '../assets/cup.png'
import bag from '../assets/bag.png'

export const Nav = () => {

    const menuNav = ['Tienda', 'Suscripción', 'Para empresas', 'Sobre nosotros', 'Contacto']
    return (
        <nav className='flex gap bg-custom'>
            <div>
                <p>cafedealtura.com</p>
                <img src={cup} alt="" />
            </div>
            <ul className='flex gap-4'>
                {menuNav.map((option, i) => { return <NavList key={i} name={option} /> })}
            </ul>
            <div className='flex  gap-6'>
                <section>
                    <img src={telWhi} alt="" />
                    <p>+34 919 49 05 18</p>
                </section>
                < Button name={'Iniciar sesión'} />
            </div>
            <img src={bag} alt="" />
        </nav>
    )
}
