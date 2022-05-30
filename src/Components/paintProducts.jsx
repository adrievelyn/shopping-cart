import React, { useState, useEffect } from 'react'
import CartShopping from './CartShopping';
import Apple from '../styles/images/apple.png'
import Banana from '../styles/images/banana.png'
import Orange from '../styles/images/orange.png'
import Watermelon from '../styles/images/watermelon.png'

const PaintProducts = () => {
    return (
        <div className='paint-products'>
            <CartShopping
                img={Apple}
                title='apples'
                price='500'
            />
            <CartShopping
                img={Banana}
                title='bananas'
                price='250'
            />
            <CartShopping
                img={Orange}
                title='oranges'
                price='100'
            />
            <CartShopping
                img={Watermelon}
                title='watermelon'
                price='350'
            />
        </div>
    )
}


export default PaintProducts;