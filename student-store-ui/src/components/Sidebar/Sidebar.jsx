import * as React from "react";
import "./Sidebar.css";
// import ShoppingCart from "./ShoppingCart/ShoppingCart";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutFrom,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle = () => {},
}) {
  return (
    <section className={isOpen ? "sidebar" : "sidebar-closed"}>
      <div className="buttonDiv">
        <button className="toggle-button" onClick={handleOnToggle}></button>
      </div>

      <div className="sidebar-closed" onClick={handleOnToggle}>
        {isOpen ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
      </div>
    </section>
  );
}
