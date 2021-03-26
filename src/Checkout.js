import React from 'react'
import './Checkout.css'

import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://ssl.nx.com/s2/game/maplestory/renewal/common/logo.png" alt="" />
            
                <div>
                    <h2 className="checkout_title">basket</h2>
                    { /* Basket Item */}
                    { /* Basket Item */}
                    { /* Basket Item */}
                    { /* Basket Item */}
                    { /* Basket Item */}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
