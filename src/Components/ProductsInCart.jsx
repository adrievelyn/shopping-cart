
import React, { useEffect, useState } from 'react'
import BtnAddRedEmpty from './BtnAddRedEmpty';
import { TYPES } from './BtnAddRedEmpty';
import Apple from '../styles/images/apple.png';

export const shoppingInitial = {
  
    products: [
    {
        id:1,
        title:"apple",
        price: 500,
        image: <img src={Apple}></img>
    },
    {
        id:2,
        title:"banana",
        price: 200,
        image: "../styles/images/banana.png"
    },
    {
        id:3,
        title:"orange",
        price: 100,
        image: "../styles/images/orange.png"
    },
    {
        id:4,
        title:"melon",
        price: 350,
        image: "../styles/images/watermelon.png"
    }
],
        cart:[],

};

export function ProductsInCart(state,action) {
    switch (action.type){
        case TYPES.Add_To_Cart:{
            let newItem = state.products.find((product) => product.id === action.payload);
            //console.log(newItem)

            let itemInCart = state.cart.find(item => item.id === newItem.id)
            return itemInCart 
            ?{
                ...state,
                cart: state.cart.map((item )=> 
                item.id===newItem.id ? 
                { ...item, amount: item.amount + 1 }
                : item
                ),
             } 
            :{
                ...state,
                cart:[ ...state.cart, {...newItem, amount: 1 }],
             };
            } 


            
            /*
            LO QUE RETORNABAMOS ANTES DEL ITEMCART 
            return{
                ...state,
                cart:[...state.cart, newItem],
            };*/
        
        case TYPES.Remove_One_From_Cart:{

        }
        case TYPES.Remove_All_From_Cart:{

        }
        case TYPES.Clear_Cart:{

        }
        default:
            return state;
        
    }
}