import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span>
        {/* <Sidebar /> */}
        <Logo />
        <Socials />
      </span>

      <span>
        <Link to="/">Home</Link>
      </span>

      <span>
        <Link to="/AboutUs" href="/#AboutUs">
          About Us
        </Link>
      </span>

      <span>
        <Link to="/ContactUs" href="/#ContactUs">
          Contact Us
        </Link>
      </span>
      <span>
        <Link to="/#Buy Now">Buy Now</Link>
      </span>
    </nav>
  );
}

const Socials = () => {
  return (
    <div className="Socials">
      <ul>
        <li>
          <a href="https://twitter.com/codepath?lang=en">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/codepathorg/?hl=en">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/codepath.org/">Facebook</a>
        </li>
      </ul>
    </div>
  );
};
