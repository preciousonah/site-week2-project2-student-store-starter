
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function ProductDetails() {
   const { id } = useParams();

   const [product, setProduct] = useState(); // State to store the products

   
   useEffect(() => {
    // Fetch the API data
    fetch(`https://codepath-store-api.herokuapp.com/store/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the response data
        setProduct(data.product);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductDetails">
      <p>{product?.name}</p>
      <p>{product?.description}</p>
      <img src={product?.image} alt={product?.image} />
      <p>
       
      </p>
    </div>
  );
}
