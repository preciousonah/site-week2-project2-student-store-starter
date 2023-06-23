import React from 'react';
import "./ProductCard.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
 const [count, setCount] = useState(0);

const handleIncrement = (event) => {
    console.log("Handling increment");
    event.preventDefault();
    
    setCount(count + 1);
  };

const handleDecrement = (event) => {
  event.preventDefault();

    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <p>Count: {count}</p>
      
    </div>
  );
};

export default ProductCard;
