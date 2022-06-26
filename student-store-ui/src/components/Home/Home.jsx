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
import { useState } from "react";

export default function Home(props) {
  // searching for the products
  const [searchText, setSearchText] = useState("");
  const [all, setAll] = useState(null);
  const [clothing, setClothing] = useState(null);
  const [food, setFood] = useState(null);
  const [accessories, setAccessories] = useState(null);
  const [tech, setTech] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  // toggle
  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleAll = () => {
    if (all) {
      setAll(false);
    } else {
      setAll(true);
      setClothing(false);
      setFood(false);
      setTech(false);
      setAccessories(false);
      setSelectedCategory("");
    }
  };
  const handleClothing = () => {
    if (clothing) {
      setClothing(false);
    } else {
      setClothing(true);
      setAll(false);

      setFood(false);
      setTech(false);
      setAccessories(false);
      setSelectedCategory("clothing");
    }
  };
  const handleFood = () => {
    if (food) {
      setFood(false);
    } else {
      setFood(true);
      setAll(false);
      setClothing(false);

      setTech(false);
      setAccessories(false);
      setSelectedCategory("food");
    }
  };
  const handleAccessories = () => {
    if (accessories) {
      setAccessories(false);
    } else {
      setAccessories(true);
      setAll(false);
      setClothing(false);
      setFood(false);
      setTech(false);
      setSelectedCategory("accessories");
    }
  };
  const handleTech = () => {
    if (tech) {
      setTech(false);
    } else {
      setTech(true);
      setAll(false);
      setClothing(false);
      setFood(false);

      setAccessories(false);
      setSelectedCategory("tech");
    }
  };

  const handleOnTextChange = (event) => {
    setSearchText(event.target.value);
  };

  var searchItems = props.products.filter((datum) => {
    return datum.name.toLowerCase().includes(searchText.toLowerCase());
  });

  if (selectedCategory != "") {
    searchItems = searchItems.filter((datum) => {
      return datum.category === selectedCategory;
    });
  }

  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <Sidebar
        handleOnToggle={props.handleOnToggle}
        isOpen={isOpen}
        shoppingCart={shoppingCart}
      /> */}
      <nav className="subNavbar">
        <div className="content">
          <div className="row">
            <div className="search-bar">
              <input
                type="text"
                name="search"
                placeholder="Search"
                onChange={handleOnTextChange}
              ></input>
              <i className="material-icons">search</i>
            </div>
            <div className="links">
              <span className="help">
                <i className="material-icons">help</i>Help
              </span>
              <div className="cart">
                My Cart
                <i className="material-icons">shopping_cart</i>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="menu-thingy">
              <i className="material-icons" onClick={() => handleToggle()}>
                menu
              </i>
            </div>

            {/* categories for the filters  */}
            <ul className={open ? "category open" : "category closed"}>
              <li
                className={all ? "is-active" : "is-inactive"}
                onClick={() => handleAll()}
              >
                <button className="allCategories">All Categories</button>
              </li>

              <li
                className={clothing ? "is-active" : "is-inactive"}
                onClick={() => handleClothing()}
              >
                <button className="clothing">Clothing</button>
              </li>

              <li
                className={food ? "is-active" : "is-inactive"}
                onClick={() => handleFood()}
              >
                <button className="food">Food</button>
              </li>

              <li
                className={accessories ? "is-active" : "is-inactive"}
                onClick={() => handleAccessories()}
              >
                <button className="accessories">Accessories</button>
              </li>

              <li
                className={tech ? "is-active" : "is-inactive"}
                onClick={() => handleTech()}
              >
                <button className="tech">Tech</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h3>Best Selling Products</h3>
      <ProductGrid
        search={props.search}
        filter={props.filter}
        // had to change this to searchItems so that filter and search can work for the product grid - without it didn't work
        products={searchItems}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      />
      {/* <p>Home</p> */}
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
