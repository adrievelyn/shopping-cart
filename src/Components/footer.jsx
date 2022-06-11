import React from "react";
import Logo from '../styles/images/carrito-compras.png'


const Header = () => {
    return(
        <div className="virtual-store1">
            <img className="virtual-store1__img1" src={Logo} width='50' height='50'></img>
            <h2 className="virtual-store1__title1">On-line Shop</h2>
        </div>
    )
}

export default Header