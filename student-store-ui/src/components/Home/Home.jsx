import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Navbar/Logo/Logo";
import Hero from "../Home/Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home(props) {
  return (
    <div className="home">
      {/* <Logo /> */}
      <Navbar />
      <Hero />
      <Sidebar />
      <ProductGrid
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      />
      <p>Home</p>
    </div>
  );
}
