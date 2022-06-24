import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Navbar/Logo/Logo";
import Hero from "../Home/Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";

export default function Home(props) {
  return (
    <div className="home">
      {/* <Logo /> */}
      <Navbar />
      <Hero />
      <Sidebar handleOnToggle={props.handleOnToggle} />
      <ProductGrid
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      />
      <p>Home</p>
      <AboutUs />
      <ContactUs />
    </div>
  );
}
