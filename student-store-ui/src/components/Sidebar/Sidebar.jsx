import React, { useState } from "react";
import "./Sidebar.css";


export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <button className="menu" onClick={handleMenuClick}>
        Menu
      </button>

      {isExpanded && (
        <>
          <div className="sidebar-item">
            <button className="menu">Shopping Cart</button>
            <span className="material-icons">add_shopping_cart</span>
            <p>No items added to cart yet. Start shopping now!</p>
          </div>

          <div className="sidebar-item">
            <button className="menu">Payment Info</button>
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
            <button className="menu">Checkout Info</button>
            <span className="material-icons">fact_check</span>
            <p>
              A confirmation email will be sent to you so that you can confirm this order.
              Once you have confirmed the order, it will be delivered to your dorm room.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
