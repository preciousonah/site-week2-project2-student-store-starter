import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo /> 
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/buy">Buy Now</a></li>
        </ul>
    </nav>
  );
}
