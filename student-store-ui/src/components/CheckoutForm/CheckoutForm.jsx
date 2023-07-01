import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({cartItems}) {
  const calculateCost = (price, quantity) => {
    return price * quantity;
  };

  let subtotal = 0;

  return (
    <div className="checkoutForm">
      {Object.values(cartItems).map((item) => {
        const totalCost = calculateCost(item.price, item.quantity);
        subtotal += totalCost;

        return (
          <div key={item.id}>
            <h4>{item.quantity} total {item.name} purchased at a cost of ${item.price} for a total cost of ${totalCost.toFixed(2)}</h4>
            {/* <p>Quantity: {item.quantity}</p> */}
            {/* <p>Before taxes, the subtotal was ${item.price}</p> */}
            {/* <p>Total Cost: {totalCost.toFixed(2)}</p> */}
            {/* Other item details */}
          </div>
        );
      })}
      {/* <p>Subtotal: {subtotal.toFixed(2)}</p> */}
      {/* <p>Tax (8.75%): {(subtotal * 0.0875).toFixed(2)}</p> */}
      <p>Before taxes, the subtotal was ${subtotal.toFixed(2)}</p>
      {/* <p>Total: {(subtotal + (subtotal * 0.0875)).toFixed(2)}</p> */}
      <p>After taxes and fees were applied, the total comes out to {(subtotal + (subtotal * 0.0875)).toFixed(2)}</p>
    </div>
  );
};

// Receipt
// Showing receipt for Precious Faith Onah available at preciousonah12@gmail.com:

// 2 total Apple Watch purchased at a cost of $399.99 for a total cost of $799.98.
// Before taxes, the subtotal was $799.98
// After taxes and fees were applied, the total comes out to $869.98