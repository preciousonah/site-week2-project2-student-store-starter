import React from 'react';
import "./ProductCard.css";


const ProductCard = ({ product }) => {

  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductCard;
