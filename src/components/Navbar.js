import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <h3>Home</h3>
          </NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink to="/shop" activeClassName="active">
            <h3>Shop</h3>
          </NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink to="/cart" activeClassName="active">
            <h3>Cart</h3>
          </NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink to="/info" activeClassName="active">
            <h3>Info</h3>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
