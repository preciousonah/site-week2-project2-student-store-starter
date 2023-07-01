import React, { useState } from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { AiOutlineArrowLeft,  AiOutlineArrowRight} from 'react-icons/ai';

export default function Sidebar({ cartItems }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showInfoMessage, setShowInfoMessage] = useState(false);
  
  // const [isReceiptVisible, setIsReceiptVisible] = useState(false);
  // const[subTotal, setsubTotal] = useState(0)

  // const handleCheckout = () => {
  //   setIsReceiptVisible(true);
  // };

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckoutButtonClick = () => {
    if (name !== "" && email !== "") {
    setShowReceipt(true);
    } else {
      setShowInfoMessage(true);
    }
  };


  return (
    // <><ShoppingCart cartItems={cartItems}/></>
    <section className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      {/* { <button className="menu" onClick={handleMenuClick}>< AiOutlineArrowLeft /></button>}
       */}
        <button className="menu" onClick={handleMenuClick}>
        {isExpanded ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
      </button>

      {isExpanded && (
        <>
        <ShoppingCart cartItems={cartItems} />

          <div className="sidebar-item">
            <h2 className="menu">Payment info</h2> 
            {/* <span className="material-icons">monetization_on</span>  */}
            <form>
            <input
          className="searchInput"
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <input
          className="searchInput"
          type="text"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </form>

            {showInfoMessage && (
              <p style={{ color: "red" }}>
                User info must include an email and name.
              </p>
            )}
              
            
            <button className="menu" onClick={handleCheckoutButtonClick}>Checkout</button>
          </div>

          {/* in the handcheckbutton click function i need an if statement where it checks if the name and email have been provided */}

          <div className="sidebar-item">
            {<h1 className="menu">Checkout Info</h1> }
            {/* <span className="material-icons">fact_check</span> */}
            <p>
            A confirmation email will be sent to you so that you can confirm this order.
              Once you have confirmed the order, it will be delivered to your door
            </p>
          </div>
          {showReceipt && (
             <CheckoutForm cartItems={cartItems} />
          )}
         
        </>
        
      )}
    </section>
  );
}
