import React from 'react';

const Product = ({ products }) => {


  console.log(products)

  if (!products) {
    return <div>Loading...</div>; // Display a loading state or message while products are being fetched
  }

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default Product;
