import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';

import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://upload3.inven.co.kr/upload/2021/01/07/bbs/i14551385490.jpg" alt="" />
            
                <div>
                    <h2 className="checkout_title">Your shopping basket</h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
