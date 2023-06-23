import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import Banner from "../Banner/Banner";
import Search from "../Search/Search";
import ProductGrid from "../ProductGrid/ProductGrid";
import Categories from "../Categories/Categories";

export default function App() {
  const [products, setProducts] = useState([]); // State to store the products
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store the filtered products
  const [selectedCategory, setSelectedCategory] = useState("All categories"); // State to store the selected category

  useEffect(() => {
    // Fetch the API data
    fetch("https://codepath-store-api.herokuapp.com/store")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the response data
        const products = data.products;
        // console.log(`Product name ${products[1].name}`);
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
        (product) => {
          // console.log({ "product.category": product.category, "buttonCategory: ": category.toLowerCase(), "equality: ": product.category === category.toLowerCase()})
          return (product.category === category.toLowerCase())
        });
      console.log("filtered products: ", filteredProducts)
      setFilteredProducts(filteredProducts);
    }
  };


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Logo />
          <Banner />
          <Search onSearch={handleSearch} />
          <Categories selectCategory={handleCategorySelect} />
          <Sidebar />
          <ProductGrid products={filteredProducts} />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}
