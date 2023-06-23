import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
