import React, { useReducer } from 'react'
import ProductsInCart from './ProductsInCart';

//import PaintProducts from "./PaintProducts";
//import Api from '../api.json'
//import apple from '../styles/images/apple.png'

export const ShoppingCart = (props) => {
    return(
    
        <div className='container'>
            <div className='card'>
                <img src={props.img} className='card__img'/>
                <div className='card__body'>
                    <h2 className='card__title'>{props.title}</h2>
                    <p className='card__price'>{props.price}</p>
                    <button className='card__btn'>Add to Cart</button>
                </div>
            </div>
        </div>
    );    
};
    
export const Product = () => {
    const [ state, dispatch ] = useReducer( BtnAddRedEmptyReducer, shoppingInitialState )
    const { products, cart } = state; //products y cart hacen referencia a prodductsInCart
        return(
            <div className='card1'>
                <div className='card__body1'>
                    <p className='card__title1'>Products</p>
                    <article className='Box'></article>
                    <p className='card__amount1'>Amount</p>
                    <p className='card__action1'>Action</p>
                    <p className='card__total1'>Total</p>
                </div>
                <div>
                    <button className='card__btn' id='card__btn'>Empty Cart</button>
                </div>
                <div>
                    <p>Empty Cart - Start Shopping</p>
                </div>
            </div>
    )
        
}










/*  PINTAR LOS PRODUCTOPS CON OTRA TARJETA DESDE PAINTPRODUCTS






//LLAMADA DESDE API JSON
 <div>
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

        