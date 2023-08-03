import React from 'react'
import cup from '../assets/cup.png'
import telSilver from '../assets/telSilver.png'
import mail from '../assets/mail.png'
import { NavList } from '../components/NavList'
import { ButtonContact } from '../components/ButtonContact'
import { RightsReserved } from '../components/RightsReserved'


export const Footer = () => {
    const menuNav = ['Tienda', 'Suscripción', 'Para empresas', 'Sobre nosotros', 'Contacto']
    const cookiesList = ['Política de privacidad','Política de cookies','Términos y condiciones']

    return (
        <div>
            <section className='flex'>
                <div><p>cafedealtura.com</p><img src={cup} alt="" /></div>
                <div>
                    <div>
                        <h3>Te ayudamos en</h3>
                        < ButtonContact name={'+34 919 49 05 18'} img={telSilver}/>
                        < ButtonContact name={'hola@cafedealtura.com'} img={mail}/>
                    </div>
                    <div> <ul className='flex gap-4'>
                        {menuNav.map((option, i) => { return <NavList key={i} name={option} /> })}
                    </ul></div>
                    <div>
                        <ul>
                    {cookiesList.map((option, i) => { return <NavList key={i} name={option} /> })}
                        </ul></div>
                </div>
            </section>
            < RightsReserved />
        </div>
    )
}
