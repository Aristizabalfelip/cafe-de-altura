import React, { useContext } from 'react'
import { NavList } from '../components/NavList'
import { Button } from '../components/Button'
import telWhi from '../assets/telWhi.png'
import cup from '../assets/cup.png'
import bag from '../assets/bag.png'
import { Link } from 'react-router-dom'
import { PurchaseContext } from '../App'

export const Nav = () => {

    const menuNav = ['Tienda', 'Suscripción', 'Para empresas', 'Sobre nosotros', 'Contacto']
    const { purchase } = useContext(PurchaseContext)

    return (
        <nav className='py-3 px-10 flex gap bg-custom text-white justify-between items-center font-medium'>
            <Link className='flex items-center gap-[7.332px] text-[23.463px] font-normal' to="/">cafedealtura.com <img className='w-[20.53px] h-[24.929px]' src={cup} alt="" /></Link>
            <ul className='flex gap-4 items-start'>
                {menuNav.map((option, i) => { return <NavList key={i} name={option} /> })}
            </ul>
            <div className='flex  gap-6'>
                <section className='flex gap-2 items-center'>
                    <img className='w-[18px]' src={telWhi} alt="" />
                    <p>+34 919 49 05 18</p>
                </section>
                < Button name={'Iniciar sesión'} buttonStyle='flex gap-2 py-2 px-6 bg-coBuSe rounded' />
            </div>
            <Link to="/shoppingcart" className='flex gap-2 items-center'><img className='w-[17.665px] h-5' src={bag} alt="" />
                <p className='flex flex-col w-6 h-6 p-2 justify-center rounded-full bg-coCantCof'>{purchase.reduce((acum, obj) => acum + obj.quantity, 0)}</p>
            </Link>

        </nav>
    )
}
