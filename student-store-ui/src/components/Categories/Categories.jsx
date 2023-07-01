import React from "react";
import "./Categories.css";

export default function Categories({ selectCategory }) {
  function handleClick(category) {
    
    selectCategory(category);
  }

  return (
      <nav className="navbar2">
        <ul>
          <li>
            <a onClick={() => handleClick("Clothing")}>Clothing</a>
          </li>
          <li>
            <a onClick={() => handleClick("Food")}>Food</a>
          </li>
          <li>
            <a onClick={() => handleClick("Accessories")}>Accessories</a>
          </li>
          <li>
            <a onClick={() => handleClick("Tech")}>Tech</a>
          </li>
          <li>
            <a onClick={() => handleClick("All categories")}>All categories</a>
          </li>
        </ul>
      </nav>
  );
}
