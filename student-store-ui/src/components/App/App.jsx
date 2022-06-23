import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import BuyNow from "../BuyNow/BuyNow";
//import ProductGrid from "../ProductGrid/ProductGrid"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  //getting the data
  const url = `https://codepath-store-api.herokuapp.com/store`;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //---------------------------
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          {/* -----the routes---- */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="navbar" element={<Navbar />} />
            <Route path="sidebar" element={<Sidebar />} />
          </Routes>
          {/* ------------------ */}
        </main>
      </BrowserRouter>
    </div>
  );
}
