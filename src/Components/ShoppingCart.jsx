import React, { useReducer } from 'react'
//import ProductsInCart from './ProductsInCart';
import BtnAddRedEmpty from './BtnAddRedEmpty';
import { shoppingInitial, ProductsInCart } from './ProductsInCart';
import ProductItem from './ProductItem';
import { CartItem, CartItem2, CartItem3, CartItem4, CartItem5 } from './CartItem';
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

        const delFromCart = (id, sum = true) => {
            console.log(id, sum)
            if(sum){
                dispatch({type: TYPES.Add_Sum_One_From_Cart, payload:id})
            }else{
                dispatch({type: TYPES.Remove_Rest_One_From_Cart, payload:id})
            }
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
                        <article className='card__product1'>
                            <p key={emptyCart}>Product</p>
                            {
                                cart.map(( item, index ) => (
                                < CartItem key={index} data={item} delFromCart={delFromCart} />
                            ))}  
                        </article>

                        <article className='card__price1'>
                            <p>Price</p>
                            {
                                cart.map(( item, index ) => (
                                < CartItem2 key={index} data={item} delFromCart={delFromCart} />
                            ))}  
                           
                        </article>
                        <article className='card__amount1'>
                            <p>Amount</p>
                            {
                                cart.map(( item, index ) => (
                                < CartItem3 key={index} data={item} delFromCart={delFromCart} />
                            ))} 
                        </article>
                      
                        <article className='card__action1'>
                            <p>Action</p>
                            {
                                cart.map(( item, index ) => (
                                < CartItem4 key={index} data={item} delFromCart={delFromCart} />
                            ))} 
                        </article>
                        <article className='card__total1'>
                            <p>Total</p>
                            {
                                cart.map(( item, index ) => (
                                < CartItem5 key={index} data={item} delFromCart={delFromCart} />
                            ))} 
                        </article>
                    </div>
                </div>
                <div className='buttonEmpty'>
                <article>
                    <button onClick={emptyCart} className='card__btn'>Empty Cart</button>
                       
                </article>
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
        </div>
        
        

          <div className='start-shopping'>
                    <p>Empty Cart - Start Shopping</p>
                </div>
        */

 