import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import Banner from "../Banner/Banner";
import Search from "../SearchForm/SearchForm";
import ProductGrid from "../ProductGrid/ProductGrid"; 
import ProductCard from "../ProductCard/ProductCard"; 
import Categories from "../Categories/Categories";

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
      // print(data.get("products"))
      const products = data.products
      // console.log(data[products])
      console.log(`Product name ${products[1].name}`)
      setProducts(products);
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
          <Categories />
          <Sidebar />
          <ProductGrid products={products} /> 
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}