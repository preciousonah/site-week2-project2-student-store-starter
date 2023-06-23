import React from 'react';
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";


const Product = ({ products }) => {
  console.log(products);

  if (!products) {
    return <div>Loading...</div>; // Display a loading state or message while products are being fetched
  }

  return (
    <div className="product-grid">
      <h3>Products</h3>
      {<div className="grid-container">
        {products.map((product) => (
            <ProductCard key = {product.id} product = {product}/>
        ))}
      </div> }
    </div>
  );
};

export default Product;
