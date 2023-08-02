import React from 'react'

export const CoffeeProducts = ({quantity,img,name,price}) => {
    return (
        <div className='flex items-center'>
            <section className='flex content-center items-center gap-2 self-stretch'>
                <button>-</button><p>{quantity}</p><button>+</button>
            </section>
            <img src={img} alt="" />
            <section>
                <p>{name}</p>
                <p>Paquete de café, 250 gr</p>
            </section>
            <p>{price}</p>
            <hr />
        </div>
    )
}
