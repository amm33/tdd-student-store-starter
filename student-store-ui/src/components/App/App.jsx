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
import { useParams } from "react-router-dom";

export default function App() {
  //state variables
  const [products, setProducts] = useState([]); //array of product objects, empty initially
  const [isFetching, setIsFetching] = useState(null); //boolean; represents whether App is currently fetching products from the API
  const [error, setError] = useState(null); //display message when something goes wrong with API requests
  const [isOpen, setIsOpen] = useState(null); //represents whether the sidebar is open or not
  const [shoppingCart, setShoppingCart] = useState([]); //store state for users shopping cart (what they want and the quantity)
  const [checkoutForm, setCheckoutForm] = useState(null); //users info which will be sent to the API at checkout

  //getting the data
  const url = `https://codepath-store-api.herokuapp.com/store`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        products = setProducts(response.data);
        console.log(products);
      })
      .catch((err) => {
        error = setError(err);
        console.log(error);
      });
  }, []);

  //pulling id from the route --check slides

  //------------work on these-----------//
  //event handlers to be passed as props to Home and Product Detail
  handleOnToggle = () => {
    //toggle open/close state of the sidebar
  };

  handleAddItemToCart = (productId) => {
    //add product to shopping cart and make quantity 1
    //if produce is already there, increase quantity by 1
    //add price of product to the total in shopping cart
  };

  handleRemoveItemFromCart = (productId) => {
    //decrease quantity in shopping cart by 1 - only if it exists
    //if product does not exist, nothing should happen
    //if new quantity is 0, it should be removed from the shopping cart
  };

  handleOnCheckoutFormChange = (name, value) => {
    //update checkout form
  };

  handleOnSubmit = () => {
    //look at the readme file
    //should submit user order to API
  };

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
