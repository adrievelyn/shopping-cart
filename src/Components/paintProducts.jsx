import React, { useState, useEffect } from 'react'
import { CartProduct, ShoppingCart } from './ShoppingCart';
import ProductsInCart from './ProductsInCart';
import Apple from '../styles/images/apple.png'
import Banana from '../styles/images/banana.png'
import Orange from '../styles/images/orange.png'
import Watermelon from '../styles/images/watermelon.png'

const PaintProducts = () => {
    return (
        <div>
            <div>
            <CartProduct /> 
            </div>
            <div>   
            <ShoppingCart />
            </div>
        </div>
    )
};

export default PaintProducts;

//<ProductsInCart />

/*
LO PRIMERO QUE HABIA

<div>
            <div className='paint-products'>
                <ShoppingCart
                    img={Apple}
                    title='apples'
                    price='500'
                />
                <ShoppingCart
                    img={Banana}
                    title='bananas'
                    price='250'
                />
                <ShoppingCart
                    img={Orange}
                    title='oranges'
                    price='100'
                />
                <ShoppingCart
                    img={Watermelon}
                    title='watermelon'
                    price='350'
                />
            </div>
            <CartProduct />             
        </div>
*/