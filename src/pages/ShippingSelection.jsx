import React, { useContext } from 'react'
import { ShippingOption } from '../components/ShippingOption'
import { ShippingPriceContext } from '../generalPages/ShoppingCartContext'

export const ShippingSelection = () => {

  const { setShippingPrice} = useContext(ShippingPriceContext)

  

  return (
    <div>
      <h3>Seleccionar envío</h3>
      < ShippingOption
        typeShip={'Envío 5-7 días'}
        value={'option1'}
        descShip={'Opción estándar sin seguimiento'}
        handleClick={() => setShippingPrice('GRATIS')}
        price={'GRATIS'}
      />
      < ShippingOption
        typeShip={'Envío urgente 24h '}
        descShip={'Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).'}
        value={'option2'}
        handleClick={() => setShippingPrice(9)}
        price={'9.00 €'}
      />
    </div>
  )
}
