import React, { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'

import "./Payment.css"
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';

import axios from './axios';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);

        }
        getClientSecret();
    }, [basket]) 

    console.log("The secret is >>> ", clientSecret);

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace('/orders');
        })
    }

    const handleChange = event => {
        // Listen for changes in the cardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">

                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                { /* payment section - delivey address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los angeles, CA</p>
                    </div>
                </div>

                { /* payment section - review items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
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

                { /* payment section - payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stripe magic will go */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText = {
                                        (value) => (
                                            <h3>Order Total : {value}</h3>
                                        )
                                    }
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}   //part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
