import React, { useContext } from 'react'
import { CoffeeProducts } from '../components/CoffeeProducts'
import { PurchaseContext } from '../App'
import { Button } from '../components/Button'
import { PurchaseOptions } from '../components/PurchaseOptions'
import { ShippingPriceContext } from '../generalPages/ShoppingCartContext'
import {priceCoffees} from '../utils/sumCoffees'

export const SectionCart = () => {

    const { purchase } = useContext(PurchaseContext)
    const {shippingPrice} = useContext(ShippingPriceContext)


    return (
        <div >
            <h2>Cesta</h2>

            <div className='flex' id='frame'>
                <section className='p-10'>
                    <h3>Productos</h3>
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

                </section>
                <section className='p-6'>
                    <div>
                        <h3>Total del carrito</h3>
                        <hr />
                        < PurchaseOptions option={'SUBTOTAL'} value ={priceCoffees(purchase)} />
                        < PurchaseOptions option={'ENVÍO'} value ={shippingPrice}/>
                        <hr />
                        < PurchaseOptions option={'TOTAL'} />
                    </div>
                    <div className='flex gap-2'>
                        <Button name={'Ir a checkout'} />
                        < Button name={'Seguir comprando'} />
                    </div>
                </section>
            </div>
        </div>
    )
}
