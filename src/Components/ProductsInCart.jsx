import React, { useContext } from "react";
import { useEffect, useState } from "react";

//import CartShopping from "./CartShopping";

const ProductsInCart = {
    AddToCart:'AddToCart',
    Remove_One_From_Cart: 'Remove_One_From_Cart',
    Remove_All_From_Cart: 'Remove_All_From_Cart',
    Clear_Cart:'Clear_Cart',
}

 /*const ProductsInCart = () => {
   const [inCart, setInCart] = useState(false);
    const button = useContext(ThemeContext);
    
    const handleClick = () => {
        setInCart(!inCart);
    }

   

    return (
        <div>
            Hello
        </div>
       
        
    )
}*/

export default ProductsInCart;