import { Link, useHistory } from 'react-router-dom';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import './Payment.css';
import { useStateValue } from '../Extra/StateProvider';
import { CardElement } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../Extra/reducer';
import CurrencyFormat from 'react-currency-format';


function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    // useEffect(() => {
    //     const getClientSecret = async () => {
    //         const response = await axios({
    //             method: 'post',
    //             url:`/payments/create?total=${getBasketTotal(basket) * 100}`,
                
    //         });
    //         setClientSecret(response.data.clientSecret)
    //     }
    //     getClientSecret();
    // }, [basket]) 

    console.log('The secre is >>>>', clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            } 
        }).then(({ paymentIntent })  =>{
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }


    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Maharashtra, India</p>
                    </div>
                </div>
            
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and Delivery</h3>
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

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            
                            <div className="payment_priceContainer">
                                <CurrencyFormat 
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimelScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparater = {true} 
                                prefix={"₹"}
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
