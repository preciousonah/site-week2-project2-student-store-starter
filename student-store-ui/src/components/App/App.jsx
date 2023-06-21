import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}

  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Buy Now</a></li>
    </ul>
  </nav>
  

          <Navbar />
          <div className="search">
    <input type="text" placeholder="Search..."/>
    <button>Search</button>
  </div>
          <Sidebar />
          <Home />
          
        </main>
      </BrowserRouter>
      
    </div>
  )
}
