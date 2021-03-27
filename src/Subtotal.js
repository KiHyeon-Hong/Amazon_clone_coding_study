import React from 'react'
import CurrencyFormat from "react-currency-format"

import "./Subtotal.css"

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {
                    (value) => (
                        <>
                            <p>
                                { /* part of the homework */}
                                Subtotal (0 items): <strong>0</strong>
                            </p>
                            <small className="subtotal_gift">
                                <input type="checkbox" />
                                This contains a gift
                            </small>
                        </>
                    )
                }
                decimalScale={2}
                value={0}   //part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
