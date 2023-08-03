import React, { createContext, useState } from 'react'
import { Nav } from '../pages/Nav'
import { SectionCart } from '../pages/SectionCart'
import { ShippingSelection } from '../pages/ShippingSelection'
import { RightsReserved } from '../components/RightsReserved'

export const ShippingPriceContext = createContext()

export const ShoppingCart = () => {

  const [shippingPrice, setShippingPrice] = useState('GRATIS')



  return (
    <>
      < Nav />
      < ShippingPriceContext.Provider value={{ setShippingPrice, shippingPrice }} >
        < SectionCart />
        <ShippingSelection />
      </ShippingPriceContext.Provider>
      < RightsReserved />
    </>
  )
}
