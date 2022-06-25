import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import CheckoutForm from "../Navbar/CheckoutForm/CheckoutForm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";

// import {
//   FiHome,
//   FiLogOut,
//   FiArrowLeftCircle,
//   FiArrowRightCircle,
// } from "react-icons/fi";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle = () => {},
}) {
  return (
    <div className="sideBar">
      <section className={isOpen ? "sidebar" : "sidebar-closed"}>
        <div className="buttonDiv">
          <button
            href="javascript:void(0)"
            className="toggle-button"
            onClick={handleOnToggle}
          >
            &times;
            {/* <MenuIcon /> */}
          </button>

          <div className="content">
            {/* <CheckoutForm
              products={products}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
              handleOnCheckoutFormChange={handleOnCheckoutFormChange}
              isOpen={isOpen}
              shoppingCart={shoppingCart}
              checkoutForm={checkoutForm}
            /> */}
          </div>
        </div>
        {/* <ShoppingCart
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          products={props.products}
        /> */}
      </section>
    </div>
  );
}
