import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductDetails from "../ProductDetails/ProductDetails";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function App() {
  const [products, setProducts] = useState([]); // State to store the products
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store the filtered products
  const [selectedCategory, setSelectedCategory] = useState("All categories");// State to store the selected category
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // State to track the sidebar expansion
  const [cartItems, setCartItems] = useState({}); // State to store the cart items

  useEffect(() => {
    // Fetch the API data
    fetch("https://codepath-store-api.herokuapp.com/store")
      .then((response) => response.json())
      .then((data) => {
        const products = data.products;
        setProducts(products);
        setFilteredProducts(products); // Set the initial filtered products as all products
        // console.log(data)
      })
      .catch((error) => console.log(error));

  }, []);

  const handleSearch = (searchTerm) => {
    // Filter the products based on the search term
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the filtered products state
    setFilteredProducts(filteredProducts);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All categories") {
      // If "All categories" selected, display all products
      setFilteredProducts(products);
    } else {
      // Filter the products based on the selected category
      const filteredProducts = products.filter(
        (product) => product.category === category.toLowerCase()
      );
      setFilteredProducts(filteredProducts);
    }
  };

  const handleSidebarToggle = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // const addToCart = (product) => {
    // setCartItems((prevCartItems) => [...prevCartItems, product]);
    //i want to add the product object new items to the object cartItems object and if the items exist i want to increase the quantity by 1
    //how do i check if a key exists in an object
    //if product.name exist a in my key then increase the quatity otherwise add another object which is product.name which is my key 
  //   const obj = product;
  //   if ('name' in obj) {
  //     console.log("Key exists in here")
  //   } else {
  //     console.log("Key does not exist")
  //   }
  //    console.log(product)
  // };
  const addToCart = (product) => {

    // console.log("before setter",cartItems)
      const updatedItems = { ...cartItems };
      // console.log("before the if statement", updatedItems);
      if (product.id in updatedItems) {
        // console.log("this product is already in the cart")
        // console.log("before",updatedItems)
        // If the product already exists in cartItems, increase the quantity by 1
        updatedItems[product.id].quantity += 1;
        setCartItems(updatedItems)
        // console.log("after",updatedItems)
      } else {
        // console.log("new product")

        // If the product doesn't exist in cartItems, add it as a new item with quantity 1
        updatedItems[product.id] = { ...product, quantity: 1 };
        setCartItems(updatedItems)
      }
      // return updatedItems;
  };
  const decrementCart = (product) => {

      const updatedItems = { ...cartItems };
      if (product.id in updatedItems) {
        
        updatedItems[product.id].quantity -= 1;
        setCartItems(updatedItems)
      } else {
        updatedItems[product.id] = { ...product, quantity: 1 };
        setCartItems(updatedItems)
      }
  };


console.log(cartItems)
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
  
          <Hero />
          <Search onSearch={handleSearch} />
          <Categories selectCategory={handleCategorySelect} />
          <Routes>
            <Route path="/" element={<ProductGrid products={filteredProducts} addToCart={addToCart} decrementCart = {decrementCart}/>} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Sidebar isExpanded={isSidebarExpanded} onToggle={handleSidebarToggle} cartItems = {cartItems} decrementCart = {decrementCart}/> 
          <Home />
          {/* <ShoppingCart cartItems = {cartItems}/> */}
        </main>
      </BrowserRouter>
    </div>
  );
}


//pass the function cartItems into sidebar and then into shopping cart 
//then loop through the object
