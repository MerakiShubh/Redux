import React from "react";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => {
    return state.cart;
  });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart itmes: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
