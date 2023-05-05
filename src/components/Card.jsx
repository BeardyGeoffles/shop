import React, { useState } from "react";
import addConfetti from './AddConfetti';

const Card = ( {id, name, price, imageUrl} ) => {

    const [isInCart, setInCart] = useState(false);

    const addToCart = () => {
        addConfetti();
        setInCart(true);
    }
    
    const removeFromCart = () => {
        setInCart(false);
    }

    return (
        <div className="card">
            <img src={imageUrl} width="250px" alt=""/>
            <h3>{name}</h3>
            <h4>£{price}</h4>
            <button onClick={isInCart? removeFromCart : addToCart} 
            className={[isInCart? 'remove-from-cart' : 'add-to-cart']}>{isInCart ? "Remove from cart" : "Add to cart"} </button>
        </div>
    );

}

export default Card;
