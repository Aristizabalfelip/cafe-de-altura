import React, { useContext } from 'react'
import { ShippingOption } from '../components/ShippingOption'
import { ShippingPriceContext } from '../generalPages/ShoppingCartContext'
import { PurchaseContext } from '../App'
import { priceCoffees} from '../utils/sumCoffees'

export const ShippingSelection = () => {

  const { setShippingPrice} = useContext(ShippingPriceContext)
  const { purchase } = useContext(PurchaseContext)

  return (
    <div className='flex flex-col gap-6'>
      <h3 className='text-lg font-semibold leading-6 '>Seleccionar envío</h3>
      < ShippingOption
        typeShip={'Envío 5-7 días'}
        value={'option1'}
        descShip={'Opción estándar sin seguimiento'}
        handleClick={() => setShippingPrice(0)}
        price={'GRATIS'}
      />
      <hr />
      < ShippingOption
        typeShip={'Envío urgente 24h '}
        descShip={'Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).'}
        value={'option2'}
        handleClick={priceCoffees(purchase) > 0 ? () => setShippingPrice(9) : setShippingPrice(0)}
        price={'9,00 €'}
      />
    </div>
  )
}
