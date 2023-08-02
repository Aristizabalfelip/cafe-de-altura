import React, { useContext } from 'react'
import { CoffeeProducts } from '../components/CoffeeProducts'
import { PurchaseContext } from '../App'

export const SectionCart = () => {

    const { purchase } = useContext(PurchaseContext)
    console.log(purchase);

  return (
    <div >
        <h2>Cesta</h2>

        <div className='flex' id='frame'>
            <section>
                <h3>Productos</h3>
                {
                    purchase.map((coffees,i) => {
                        return < CoffeeProducts 
                        quantity={coffees.quantity}
                        img={coffees.img}
                        name={coffees.name}
                        price={coffees.price}
                        />
                    })
                }
                
            </section>
            <section></section>
        </div>
    </div>
  )
}
