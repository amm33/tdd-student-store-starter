import * as React from "react";
import "./ShoppingCart.css";
import { useState } from "react";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  var total = 0;
  // shoppingCart.forEach((product) =>{
  //   total += products.find((elem) => elem.id === product.itemId.price * product.quantity;
  // });

  <div className="shopping-cart">
    <div className="cart-product-name"></div>
    <div className="cart-product-quantity"></div>
    <div className="subtotal"></div>
    <div className="total-price"></div>
    <div className="notification"></div>
  </div>;
}
