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
  const [subtotal, setSubtotal] = useState(null);

  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState("");

  //getting the data
  const url = `https://codepath-store-api.herokuapp.com/store`;
  // const { id } = useParams();

  //useEffect allows you to perform side effects in your components - fetching data
  useEffect(async () => {
    await axios
      .get(`http://localhost:3001/store`)
      .then((response) => {
        console.log("Response " + response);
        let responseD = response.data;
        setProducts(responseD);
        console.log("Response.data " + response.data);
        console.log(responseD);
        // console.log(products);
      })
      .catch((err) => {
        setError(err);
        // console.log(err);
      });
  }, []);

  //event handlers to be passed as props to Home and Product Detail

  const handleOnToggle = () => {
    //toggle open/close state of the sidebar
    setIsOpen(!isOpen);
    console.log("Open");
  };

  const handleAddItemToCart = (productId) => {
    var newItem;
    // var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        shoppingCart[i].quantity++;
        setShoppingCart([...shoppingCart]);
        var tempPrice =
          products.find((item) => item.id === productId).price + subtotal;
        setSubtotal(tempPrice);

        return;
      }
    }
    newItem = {
      itemId: productId,
      quantity: 1,
    };

    setShoppingCart([newItem, ...shoppingCart]);
    var tempPrice =
      products.find((item) => item.id === productId).price + subtotal;
    setSubtotal(tempPrice);
    // console.log(subtotal);
  };

  const handleRemoveItemFromCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        if (shoppingCart[i].quantity != 1) {
          shoppingCart[i].quantity--;
          setShoppingCart([...shoppingCart]);
          var tempPrice =
            subtotal - products.find((item) => item.id === productId).price;
          setSubtotal(tempPrice);
          return;
        } else {
          shoppingCart.splice(i, 1);
          setShoppingCart([...shoppingCart]);
          var tempPrice =
            subtotal - products.find((item) => item.id === productId).price;
          setSubtotal(tempPrice);
          return;
        }
      }
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {
    //update checkout form
  };

  const handleOnSubmitCheckoutForm = () => {
    //look at the readme file
    //should submit user order to API
  };

  //---------------------------
  return (
    <div className="app">
      {/* moving through different parts of the application  */}
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          {/* -----the routes---- */}
          <Sidebar
            isOpen={isOpen}
            handleOnToggle={handleOnToggle}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            checkoutForm={checkoutForm}
            shoppingCart={shoppingCart}
            products={products}
            // cartSize={cartSize.length}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
          />
          {/* <Home /> */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleOnToggle={handleOnToggle}
                  isOpen={isOpen}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  checkoutForm={checkoutForm}
                  subtotal={subtotal}
                  cartSize={shoppingCart.length}
                  setSubtotal={setSubtotal}
                />
              }
            />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
            {/* <Route path="/ContactUs" element={<ContactUs />} /> */}
            {/* <Route path="navbar" element={<Navbar />} />
            <Route path="sidebar" element={<Sidebar />} /> */}
          </Routes>
          {/* ------------------ */}
        </main>
      </BrowserRouter>
    </div>
  );
}
