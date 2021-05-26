import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
};

export default Navbar;
