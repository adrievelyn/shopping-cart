import React from 'react'
import { useState } from "react"


export const CartItem = ({data, delFromCart}) => {
    let{id, title } = data //destructuramos de data
    return(
    <div className='item__title'>
        <h4>{title}</h4>
    </div>
    )
}

export const CartItem2 = ({data, delFromCart}) => {
    let{id, price } = data //destructuramos de data
    return(
    <div className='item__title'>
        <h4>{price}</h4>
    </div>
    )
}

export const CartItem3 = ({data, delFromCart}) => {

    
}
