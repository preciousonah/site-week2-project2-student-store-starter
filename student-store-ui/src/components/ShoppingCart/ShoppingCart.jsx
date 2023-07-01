

import React from 'react';
import "./ShoppingCart.css";

const ShoppingCart = ({ cartItems }) => {
  const calculateCost = (price, quantity) => {
    return price * quantity;
  };

  let subtotal = 0;

  if (Object.keys(cartItems).length === 0) {
    return <p>No items added to cart yet. Start shopping now!</p>;
  }

  return (
    <div className="shoppingCart">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Cost</th>
            {/* Other table headers */}
          </tr>
        </thead>
        <tbody>
          {Object.values(cartItems).map((item) => {
            const totalCost = calculateCost(item.price, item.quantity);
            subtotal += totalCost;

            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{totalCost.toFixed(2)}</td>
                {/* Other table cells */}
              </tr>
            );
          })}
        </tbody>
      </table>
      {Object.keys(cartItems).length > 0 && (
        <>
      <p>Subtotal: {subtotal.toFixed(2)}</p>
      <p>Tax (8.75%): {(subtotal * 0.0875).toFixed(2)}</p>
      <p>Total: {(subtotal + (subtotal * 0.0875)).toFixed(2)}</p>
      </>
      )}
    </div>
  );
};

export default ShoppingCart;
