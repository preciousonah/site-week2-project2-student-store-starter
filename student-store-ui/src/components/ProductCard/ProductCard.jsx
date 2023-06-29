import React from 'react';
import "./ProductCard.css";
import { useState } from "react";
import { Link } from 'react-router-dom';


const ProductCard = ({ product, addToCart, decrementCart}) => {
 const [count, setCount] = useState(0);

const handleIncrement = (event) => {

    event.preventDefault();
    
    setCount(count + 1);
    addToCart(product)
  };

const handleDecrement = (event) => {
  event.preventDefault();

    if (count > 0) {
      setCount(count - 1);
      decrementCart(product)
    }
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <div >
        <button className = "button" onClick={handleIncrement}>+</button>
        <button className = "button" onClick={handleDecrement}>-</button>
      </div>
      <p>{count}</p>
      
    </div>
  );
};

export default ProductCard;
