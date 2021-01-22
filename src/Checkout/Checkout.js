import React from 'react'
import "./Checkout.css"
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { useStateValue } from '../Extra/StateProvider'
import Subtotal from '../Subtotal/Subtotal'

function Checkout() {
    const [{ basket },dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />
                <div>
                    <h2 className="title">Your Shopping Basket</h2>

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