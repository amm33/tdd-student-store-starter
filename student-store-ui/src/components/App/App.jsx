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

  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState("");

  //getting the data
  const url = `https://codepath-store-api.herokuapp.com/store`;
  // const { id } = useParams();

  useEffect(async () => {
    await axios
      .get(url)
      .then((response) => {
        console.log("Response " + response);
        let responseD = response.data;
        setProducts(responseD.products);
        console.log("Response.data " + response.data);
        console.log(responseD);
        // console.log(products);
      })
      .catch((err) => {
        setError(err);
        // console.log(err);
      });
  }, []);

  //pulling id from the route --check slides

  //------------work on these-----------//
  //event handlers to be passed as props to Home and Product Detail

  const handleOnToggle = () => {
    //toggle open/close state of the sidebar
    setIsOpen(!isOpen);
    console.log("Open");
  };

  const handleAddItemToCart = (productId) => {
    //add product to shopping cart and make quantity 1
    //if produce is already there, increase quantity by 1
    //add price of product to the total in shopping cart
    // var aCart = [];
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        shoppingCart[i].quantity++;
        setShoppingCart([...shoppingCart]);
        return;
      }
      var item = { itemId: productId, quantity: 1 };
      setShoppingCart([item, ...shoppingCart]);
    }
  };

  const handleRemoveItemFromCart = (productId) => {
    //decrease quantity in shopping cart by 1 - only if it exists
    //if product does not exist, nothing should happen
    //if new quantity is 0, it should be removed from the shopping cart
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        if (shoppingCart[i].quantity == 1) {
          shoppingCart.splice(i, 1);
        } else {
          shoppingCart[i].quantity--;
        }
        setShoppingCart([...shoppingCart]);
      }
    }
  };

  //const handleOnCheckoutFormChange = (name, value) => {
  //   //update checkout form
  // };

  //const handleOnSubmit = () => {
  //   //look at the readme file
  //   //should submit user order to API
  // };

  //---------------------------
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          {/* -----the routes---- */}
          {/* <Navbar />
          <SubNavbar setFilter={setFilter} filter={filter} />
          <SearchBar search={search} setSearch={setSearch} />
          // <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} /> */}
          {/* <Home /> */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleOnToggle={handleOnToggle}
                  isOpen={isOpen}
                  // search={search}
                  // setSearch={setSearch}
                  // filter={filter}
                  // setFilter={setFilter}
                />
              }
            />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="navbar" element={<Navbar />} />
            <Route path="sidebar" element={<Sidebar />} /> */}
          </Routes>
          {/* ------------------ */}
        </main>
      </BrowserRouter>
    </div>
  );
}

// search bar
// const SearchBar = ({ search, setSearch }) => {
//   return (
//     <div className="search">
//       <input
//         placeholder="Search"
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

//filter
// const FilterCategories = ({ filter, setFilter }) => {
//   const categories = ["All Categories", "Food", "Accessories", "Tech"];
//   return (
//     <div className="categories">
//       {categories.map((category, i) => {
//         return (
//           <button
//             key={i}
//             id={`${filter === item ? "selected-filter" : ""}`}
//             onClick={() => {
//               setFilter(item);
//             }}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// const SubNavbar = ({ filter, setFilter }) => {
//   const categories = ["All Categories", "Food", "Accessories", "Tech"];
//   return (
//     <div className={`sub-navbar`}>
//       {categories.map((item, i) => {
//         return (
//           <button
//             key={i}
//             id={`${filter === item ? "selected-filter" : ""}`}
//             onClick={() => {
//               setFilter(item);
//             }}
//           >
//             {item}
//           </button>
//         );
//       })}
//     </div>
//   );
// };
