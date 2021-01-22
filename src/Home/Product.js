import React from 'react'
import './Product.css'
import { useStateValue } from '../Extra/StateProvider';

function Product({ id, title, image, price, rating, isSecondlane }) {
    const [{basket}, dispatch] = useStateValue();

    console.log(basket)

    const addtoBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className={`product ${isSecondlane && "productSecondlane" }`}>
            <div className="product_title">
                <p> {title} </p>
                <p className="product_price">
                    <small>₹</small>
                    <strong> {price} </strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                    
                </div>
            </div>
            <img
                src={image} 
            />
            <button onClick={addtoBasket}>Add to basket</button>
        </div>
    )
}

export default Product
