
import React, { useEffect, useState } from 'react'
import BtnAddRedEmpty from './BtnAddRedEmpty';
import { TYPES } from './BtnAddRedEmpty';


export const shoppingInitial = {
  
    products: [
    {
        id:1,
        title:"apple",
        price: 500,
        image: "./styles/images/apple.png"
    },
    {
        id:2,
        title:"banana",
        price: 200,
        image: "./styles/images/banana.png"
    },
    {
        id:3,
        title:"orange",
        price: 100,
        image: "./styles/images/orange.png"
    },
    {
        id:4,
        title:"watermelon",
        price: 350,
        image: "./styles/images/watermelon.png"
    },
],
        cart:[],

};

export function ProductsInCart(state,action) {
    switch (action.type){
        case TYPES.AddToCart:{

        }
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