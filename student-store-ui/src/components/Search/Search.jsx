import React, { useState } from "react";
import "./Search.css";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="searchBtn">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleChange}
         
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
