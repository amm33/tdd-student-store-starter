import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span>
        {/* <Sidebar /> */}
        <div className="logo">
          <Logo />
        </div>
        <div className="socials">
          <SocialIcon
            url="https://twitter.com/codepath?lang=en"
            bgColor="#2c4047"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/codepathorg/?hl=en"
            bgColor="#2c4047"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/codepath.org/"
            bgColor="#2c4047"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
        {/* <Socials /> */}
      </span>

      <span>
        <Link to="/">Home</Link>
      </span>

      <span>
        <a href="/#AboutUs">About Us</a>
        {/* <Link to="/#AboutUs">About Us</Link> */}
      </span>

      <span>
        <a href="/#ContactUs">About Us</a>
        {/* <Link to="/#ContactUs">Contact Us</Link> */}
      </span>
      <span>
        <a href="/#BuyNow">Buy Now</a>
        {/* <Link to="/#BuyNow">Buy Now</Link> */}
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
