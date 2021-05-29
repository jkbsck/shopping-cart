import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { cart } = useGlobalContext();

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
        <li className={cart.length > 0 ? "cart-with-items" : ""}>
          <NavLink to="/cart" activeClassName="active">
            <h3>
              Cart <span>{cart.length > 0 ? `(${cart.length})` : ""}</span>
            </h3>
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
