import React from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-loge"></div>
      <img src={logo} alt="" />
      <p>SHOPPER</p>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cartIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
