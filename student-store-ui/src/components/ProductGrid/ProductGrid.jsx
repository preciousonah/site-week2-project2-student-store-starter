import React from 'react';
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom"
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Product = ({ products }) => {
  console.log(products);

  if (!products) {
    return <div>Loading...</div>; // Display a loading state or message while products are being fetched
  }

  return (
    <div className="product-grid">
      <h3> Best Selling Products</h3>
      {<div className="grid-container">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
           <ProductCard key = {product.id} product = {product}/>
          </Link>
        ))}
      </div> }
      <About /><Contact /><Footer />
    </div>
  );
};

export default Product;
