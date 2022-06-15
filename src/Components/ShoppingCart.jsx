import React, { useReducer } from 'react'
//import ProductsInCart from './ProductsInCart';
import BtnAddRedEmpty from './BtnAddRedEmpty';
import { shoppingInitial, ProductsInCart } from './ProductsInCart';
import ProductItem from './ProductItem';
import { CartItem, CartItem2, CartItem3, CartItem5 } from './CartItem';
import { TYPES } from './BtnAddRedEmpty';
import Store from '../styles/images/online-store.png'
import Cart from '../styles/images/carrito-compras.png'


//import PaintProducts from "./PaintProducts";
//import Api from '../api.json'
//import apple from '../styles/images/apple.png'

    //funcion despachadora dispatch 
    export const ShoppingCart = () => {
        const [ state, dispatch ] = useReducer(ProductsInCart, shoppingInitial);
    
        const { products, cart } = state; //products y cart hacen referencia a prodductsInCart
        
        const addToCart = (id) => {
            //console.log(id)
            dispatch({type: TYPES.Add_To_Cart, payload:id})
        }

        const delFromCart = () => {
    
        }
        const emptyCart = () => {
            dispatch({ type:TYPES.Clear_Cart});
        };
        return(
            <div className='container'>
                <img className='container__store' src={Store} alt="store" />
                <div className='wrapper'>
                    <article>
                        { products.map((product) => (
                        <ProductItem key={product.title} data={product} addToCart={addToCart}/> ))}
                    </article>
                </div>

                    
                <div className='wrapper1'>
                <img className='wrapper1__cart' src={Cart} alt="cart" />
                    <div className='card1'>
                        <article>
                            <p key={emptyCart} className='card__product1'>Product</p>
                            {
                                cart.map(( item, index ) => (
                                < CartItem key={index} data={item} delFromCart={delFromCart} />
                            ))}  
                        </article>

                        <article>
                            <p className='card__price1'>Price</p>
                            {
                                cart.map(( item, index ) => (
                                < CartItem2 key={index} data={item} delFromCart={delFromCart} />
                            ))}  
                           
                        </article>
                        <article>
                            <p className='card__amount1'>Amount</p>
                            {
                                cart.map(( item, index ) => (
                                < CartItem3 key={index} data={item} delFromCart={delFromCart} />
                            ))} 
                        </article>
                      
                        <article>
                            
                            <p  className='card__action1'>Action</p>
                            
  
    
                         
                        </article>
                        <div>
                            <p className='card__total1'>Total</p>
                            {
                                cart.map(( item, index ) => (
                                < CartItem5 key={index} data={item} delFromCart={delFromCart} />
                            ))} 
                        </div>
                    </div>
                </div>
                <div className='buttonEmpty'>
                <article>
                    <button onClick={emptyCart} className='card__btn'>Empty Cart</button>
                </article>
                </div>
                <div>
                    <p>Empty Cart - Start Shopping</p>
                </div>
        </div>
          
            


                
            
                
        );    
    };



    export const CartProduct = () => {
        const [ state, dispatch ] = useReducer(ProductsInCart, shoppingInitial);
    
        const { products, cart } = state; //products y cart hacen referencia a prodductsInCart
        
        const addToCart = (id) => {
            //console.log(id)
            dispatch({type: TYPES.Add_To_Cart, payload:id})
        }
    
       /* return(
            <div className='wrapper'>
                <article>
                    { products.map((product) => (
                    <ProductItem key={product.title} data={product} addToCart={addToCart}/> ))}
                </article>
            </div>
                   
        )*/
            
    }
    
    
    







/*  PINTAR LOS PRODUCTOPS CON OTRA TARJETA DESDE PAINTPRODUCTS
TARJETA DEL CARRITO DE HMTL Y JS
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

 