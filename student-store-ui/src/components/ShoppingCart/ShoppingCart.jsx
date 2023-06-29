

import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  const calculateCost = (price, quantity) => {
    return price * quantity;
  };

  let subtotal = 0;

  return (
    <div className="shoppingCart">
      {Object.values(cartItems).map((item) => {
        const totalCost = calculateCost(item.price, item.quantity);
        subtotal += totalCost;

        return (
          <div key={item.id}>
            <h4>Name: {item.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
            <p>Total Cost: {totalCost.toFixed(2)}</p>
            {/* Other item details */}
          </div>
        );
      })}
      <p>Subtotal: {subtotal.toFixed(2)}</p>
      <p>Tax (8.75%): {(subtotal * 0.0875).toFixed(2)}</p>
      <p>Total: {(subtotal + (subtotal * 0.0875)).toFixed(2)}</p>
    </div>
  );
};

export default ShoppingCart;


//for (elem in/of cartItems => )
    // console.log("we're here")
    //cartItems = {
    //  "1" : product1 {},
    //  "2" : product2 {},
    //  "12" : {
    //           "id": 12,
    //           "name: watch,
    //              ...
    // }
    // }

    //Object.keys(cartItems) = ["id1","id2"]
    //Object.values(cartItems) = [product1, product2]

    // console.log(Object.keys(cartItems));
    //
    //