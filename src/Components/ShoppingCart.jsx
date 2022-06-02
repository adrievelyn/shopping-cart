import React, { useEffect, useState } from 'react'
//import PaintProducts from "./PaintProducts";
import Api from '../api.json'
//import apple from '../styles/images/apple.png'

const ShoppingCart = (props) => {
    return(
        <div className='container'>
        <div id='products-card' className='card'>
            <img src={props.img} className='card__img'/>
            <div className='card__body'>
                <h2 className='card__title'>{props.title}</h2>
                <p className='card__price'>{props.price}</p>
                <button className='card__btn' id='card__btn'>Add to Cart</button>
            </div>
        </div>
    </div>
       
    )
}


export default ShoppingCart;


//LLAMADA DESDE API JSON
 /*<div>
        <PaintProducts />
        
        <div className='cart'>
            
            {
                Api && Api.map( api => {
                    return(
                        <div className='cart__box' key={api.id}>
                            <img src={apple} className="cart__img" alt="..."></img>
                            <h2 className='cart__title'>{api.title}</h2>
                            <h2 className='cart__price'>${api.price}</h2>
                        </div>
                    )
                })
            }
        </div>
        </div>*/

        /**/ 