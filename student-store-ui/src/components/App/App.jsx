import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductDetails from "../ProductDetails/ProductDetails";

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

  const addToCart = (product) => {

      const updatedItems = { ...cartItems };
      if (product.id in updatedItems) {
        updatedItems[product.id].quantity += 1;
        setCartItems(updatedItems)
      } else {
        updatedItems[product.id] = { ...product, quantity: 1 };
        setCartItems(updatedItems)
      }
  };
  
  const decrementCart = (product) => {
    const updatedItems = { ...cartItems };
    if (product.id in updatedItems) {
      updatedItems[product.id].quantity -= 1;
      if (updatedItems[product.id].quantity === 0) {
        delete updatedItems[product.id]; 
      }
      setCartItems(updatedItems);
    }
  };
  
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
        </main>
      </BrowserRouter>
    </div>
  );
}
