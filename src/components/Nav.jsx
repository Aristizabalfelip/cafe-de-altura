import React from 'react'
import { NavList } from './NavList'

export const Nav = () => {

    const navegation = ['Tienda', 'Suscripción', 'Para empresas', 'Sobre nosotros', 'Contacto']
    return (
        <nav>
            <div>
                <p>cafedealtura.com</p>
                <img src="" alt="" />
            </div>
            <li>
                {
                    navegation.map((option, i) => {
                        return <NavList
                            key={i}
                            name={option}
                        />

                    })
                }

            </li>
        </nav>
    )
}
