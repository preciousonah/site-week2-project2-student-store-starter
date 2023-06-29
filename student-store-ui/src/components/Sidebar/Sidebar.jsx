import React, { useState } from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({ cartItems }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // <><ShoppingCart cartItems={cartItems}/></>
    <section className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      { <button className="menu" onClick={handleMenuClick}>CART</button>}
      <ShoppingCart cartItems={cartItems}/>
      {isExpanded && (
        <>
          <div className="sidebar-item">
            { <button className="menu">Shopping Cart</button> }
            <span className="material-icons">add_shopping_cart</span> 
            <p></p>
          </div>

          <div className="sidebar-item">
            <button className="menu">Payment info</button> 
            <span className="material-icons">monetization_on</span> 
            <p>
              Name: Student Name<br />
              Email: student@codepath.org<br />
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </p>
              
            
            <button className="menu">Checkout</button>
          </div>

          <div className="sidebar-item">
            {<button className="menu">Checkout Info</button> }
            <span className="material-icons">fact_check</span>
            <p>
            A confirmation email will be sent to you so that you can confirm this order.
              Once you have confirmed the order, it will be delivered to your dor
            </p>
          </div>
        </>
      )}
    </section>
  );
}
