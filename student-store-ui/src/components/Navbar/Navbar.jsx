import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span>
        <Link to="/">Logo</Link>
      </span>

      <span>
        <Link to="/">Home</Link>
      </span>

      <span>
        <Link to="/aboutus">About Us</Link>
      </span>

      <span>
        <Link to="">Contact Us</Link>
      </span>
      <span>
        <Link to="">Buy Now</Link>
      </span>
    </nav>
  );
}
