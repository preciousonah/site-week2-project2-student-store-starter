
import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Logo from "../Logo/Logo"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Banner from "../Banner/Banner"
import Search from "../SearchForm/SearchForm"
// import About from "../About/About"
// import CheckoutForm from "../CheckoutForm/CheckoutForm"
// import Contact from "../Contact/Contact"
// import Footer from "../Footer/Footer"
// import Grid from "../Grid/Grid"
// import Header from "../Header/Header"


export default function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Logo />
          <Banner />
          <Search/>
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}