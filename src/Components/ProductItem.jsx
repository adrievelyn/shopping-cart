import React from 'react'
import { ProductsInCart } from './ProductsInCart'

const ProductItem = ({ data, addToCart }) => {
    let {image, id, title, price} = data;

  return (
        <div className='card'>
          <img src={image} className='card__img'></img>
          <div className='card__body'>
              <h4 className='card__title'>{title}</h4>
              <h5 className='card__price'>{price}.00</h5>
              <button className='card__btn' onClick={() => addToCart(id)}>Add to Cart</button>
          </div>
        </div>
  
    
  )
}

export default ProductItem


//rafce

