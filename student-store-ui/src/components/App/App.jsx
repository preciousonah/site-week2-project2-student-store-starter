import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import Banner from "../Banner/Banner";
import Search from "../SearchForm/SearchForm";
import Products from "../Products/Products"; 
// import About from "../About/About"
// import CheckoutForm from "../CheckoutForm/CheckoutForm"
// import Contact from "../Contact/Contact"
// import Footer from "../Footer/Footer"
// import Grid from "../Grid/Grid"
// import Header from "../Header/Header"


export default function App() {
  const [products, setProducts] = useState([]); // State to store the products

  useEffect(() => {
    // Fetch the API data
    fetch("https://codepath-store-api.herokuapp.com/store")
    .then(response => response.json())
    .then(data => {
      console.log(data); // Check the response data
      setProducts(data);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Logo />
          <Banner />
          <Search />
          <Products/>
          <Sidebar />
          <Products products={products} /> {/* Pass the products state as props */}
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}
