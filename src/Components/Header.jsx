import React from "react";
import Logo from '../styles/images/carrito-compras.png'


const Header = () => {
    return(
        <div className="virtual-store">
            <img className="virtual-store__img" src={Logo} width='100' height='100'></img>
            <h1 className="virtual-store__title">On-line Shop</h1>
        </div>
    )
}

export default Header