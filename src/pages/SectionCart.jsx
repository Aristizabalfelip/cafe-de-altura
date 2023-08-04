import React, { useContext } from 'react'
import { CoffeeProducts } from '../components/CoffeeProducts'
import { PurchaseContext } from '../App'
import { Button } from '../components/Button'
import { PurchaseOptions } from '../components/PurchaseOptions'
import { ShippingPriceContext } from '../generalPages/ShoppingCartContext'
import { priceCoffees, coffeeBill } from '../utils/sumCoffees'
import { ShippingSelection } from './ShippingSelection'

export const SectionCart = () => {

    const { purchase, setBill, bill } = useContext(PurchaseContext)
    const { shippingPrice } = useContext(ShippingPriceContext)
     

    return (
        <div className='flex flex-col p-10 gap-6 self-stretch' >
            <h2 className='flex justify-center text-2xl font-medium text-greenNoHover'>
          {`Cesta (${purchase.reduce((acum, obj) => acum + obj.quantity, 0)})`}
             </h2>
            <div className='flex gap-6' >
                <section className='flex flex-col p-2 gap-6 items-start'>
                    <h3 className='text-lg font-semibold leading-6 '>Productos</h3>
                    {
                        purchase.map((coffees, i) => {
                            return < CoffeeProducts
                                key={i}
                                quantity={coffees.quantity}
                                img={coffees.img}
                                name={coffees.name}
                                price={coffees.price}
                            />
                        })
                    }

                    <ShippingSelection />
                </section>
                <section className='p-6 bg-colorTotal h-[280px]'>
                    <div className='flex flex-col gap-4 ' >
                        <h3 className='text-lg font-semibold leading-6 '>Total del carrito</h3>
                        <hr />
                        < PurchaseOptions option={'SUBTOTAL'} value={priceCoffees(purchase)} />
                        < PurchaseOptions option={'ENVÍO'} value={shippingPrice} />
                        <hr />
                        < PurchaseOptions option={'TOTAL'} value={coffeeBill(setBill, shippingPrice, priceCoffees(purchase), bill)} />
                    </div>
                    <div className='flex gap-2'>
                        <Button name={'Ir a checkout'} buttonStyle={'bg-greenNoHover rounded py-3 px-6 text-white font-semibold'} />
                        < Button name={'Seguir comprando'} buttonStyle={'rounded py-3 px-6 text-greenNoHover font-semibold'} />
                    </div>
                </section>

            </div>
        </div>
    )
}
