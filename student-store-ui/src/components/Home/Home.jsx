import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Navbar/Logo/Logo";
import Hero from "../Home/Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
// import SubNavbar from "./SubNavar/SubNavbar";

export default function Home(props) {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <Sidebar
        handleOnToggle={props.handleOnToggle}
        isOpen={isOpen}
        shoppingCart={shoppingCart}
      /> */}
      {/* <SubNavbar /> */}
      <ProductGrid
        search={props.search}
        filter={props.filter}
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      />
      <p>Home</p>
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
