import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/Contact">Contact Us</a></li>
        <li><a href="/buy">Buy Now</a></li>
      </ul>
    </nav>
    </nav>
  )
}
