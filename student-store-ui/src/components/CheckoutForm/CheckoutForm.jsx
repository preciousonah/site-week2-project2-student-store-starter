import * as React from "react"

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
          </div>
        );
      })}
      <p>Before taxes, the subtotal was ${subtotal.toFixed(2)}</p>
      <p>After taxes and fees were applied, the total comes out to {(subtotal + (subtotal * 0.0875)).toFixed(2)}</p>
    </div>
  );
};
