import React from 'react'
import { useState } from "react"


export const CartItem = ({data, delFromCart}) => {
    let{id, title } = data //destructuramos de data
    return(
    <div>
        <h4>{title}</h4>
    </div>
    )
}

export const CartItem2 = ({data, delFromCart}) => {
    let{id, price } = data //destructuramos de data
    return(
    <div className='item-price'>
        <h4><span>$</span>{price}</h4>
    </div>
    )
}

//let cart={}
export const CartItem3 = ({ data, delFromCart }) => {
    let{id, amount } = data //destructuramos de data
    return(
    <div>
        <h4>{amount}</h4>
    </div>
    ) 
}

export const CartItem4 = ({ data, delFromCart }) => {
    let{id, action } = data //destructuramos de data
    return(
    <div>
        <h4 className='btn btn-sumrest'>{action} 
            <div>
            <button onClick={() => delFromCart(id, true)} className='btn__sum'>
                    <span>+</span>
            </button>
            </div>
            <div>
            <button onClick={() => delFromCart(id, false)} className='btn__rest' >
                <span>-</span>
            </button>
            </div>
        </h4>
    </div>
    )  
}

export const CartItem5 = ({ data, delFromCart }) => {
    let{id, total, price, amount } = data //destructuramos de data
    return(
    <div className='item__total'>
        <h4>{total} <span>$</span>{price * amount}</h4>
    </div>
    )
}




