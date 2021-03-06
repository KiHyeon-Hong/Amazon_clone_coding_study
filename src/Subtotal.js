import React from 'react'
import CurrencyFormat from "react-currency-format"
//import { useHistory } from 'react-router';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'

import "./Subtotal.css"

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {
                    (value) => (
                        <>
                            <p>
                                { /* part of the homework */}
                                Subtotal ({basket?.length} items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal_gift">
                                <input type="checkbox" />
                                This contains a gift
                            </small>
                        </>
                    )
                }
                decimalScale={2}
                value={getBasketTotal(basket)}   //part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
