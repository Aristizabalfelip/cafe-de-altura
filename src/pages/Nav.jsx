import React from 'react'
import { NavList } from '../components/NavList'
import { Button } from '../components/Button'
import telWhi from '../assets/telWhi.png'
import cup from '../assets/cup.png'
import bag from '../assets/bag.png'
import { Link } from 'react-router-dom'

export const Nav = () => {

    const menuNav = ['Tienda', 'Suscripción', 'Para empresas', 'Sobre nosotros', 'Contacto']
    return (
        <nav className='py-3 px-10 flex gap bg-custom text-white justify-between'>
            <Link className='flex items-center gap-[7.332px]' to="/">cafedealtura.com <img className='w-[20.53px] h-[24.929px]' src={cup} alt="" /></Link>
            <ul className='flex gap-4 items-start'>
                {menuNav.map((option, i) => { return <NavList key={i} name={option} /> })}
            </ul>
            <div className='flex  gap-6'>
                <section className='flex'>
                    <img className='w-6 h-6' src={telWhi} alt="" />
                    <p>+34 919 49 05 18</p>
                </section>
                < Button name={'Iniciar sesión'} />
            </div>
            <Link to="/shoppingcart"><img src={bag} alt="" /></Link>
            
        </nav>
    )
}
