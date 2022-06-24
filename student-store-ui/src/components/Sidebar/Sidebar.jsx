import * as React from "react";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutFrom,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button className="toggle-button" onClick={handleOnToggle}></button>
    </section>
  );
}
