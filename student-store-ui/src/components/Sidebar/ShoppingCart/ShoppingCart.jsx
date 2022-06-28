import * as React from "react";
import "./ShoppingCart.css";
import { useState } from "react";

export default function ShoppingCart({
  isOpen,
  products,
  shoppingCart,
  subtotal,
  cartSize,
}) {
  var subtot = Math.round((subtotal + Number.Epsilon) * 100) / 100;
  var taxes = subtotal * 0.0875;
  var total = subtotal + taxes;
  total = Math.round((total + Number.EPSILON) * 100) / 100;
  taxes = Math.round((taxes + Number.EPSILON) * 100) / 100;

  // shoppingCart.forEach((product) => {
  //   total += products.find(
  //     (elem) => elem.id === product.itemId.price * product.quantity
  //   );
  // });

  //if there is nothing in the cart yet
  if (cartSize === 0) {
    return (
      <div className="shopping-cart">
        <div className={isOpen ? "open" : "closed"}>
          <h3 className="shopping-cart">
            Shopping Cart
            <span className="cart">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
          </h3>
          <div>No item added to the cart yet. Start Shopping!</div>
        </div>
      </div>
    );
  }
  //otherwise
  return (
    <div className="shopping-cart">
      <div className={isOpen ? "open" : "closed"}>
        <h3>
          Shopping Cart
          <span className="cart">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        {/* cart table component */}
        <div className="CartTable">
          <div className="header">
            <div className="header-row">
              <span className="flex-2">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Cost</span>
            </div>
          </div>

          {/* going through each item in the cart  */}
          {shoppingCart
            ? shoppingCart.map((item, i) => (
                <div className="product-row" key={i}>
                  <span className="flex-2 cart-product-name">
                    {products.find((elem) => elem.id === item.itemId).name}
                  </span>
                  <span className="center cart-product-price">
                    ${products.find((elem) => elem.id === item.itemId).price}
                  </span>
                  <span className="center cart-product-subtotal">
                    $
                    {item.quantity *
                      products.find((elem) => elem.id === item.itemId).price}
                  </span>
                </div>
              ))
            : null}
        </div>

        <div className="receipt">
          <div className="receipt-subtotal">
            <span className="label">Subtotal</span>
            <span></span>
            <span></span>
            <span className="center subtotal">{"$" + subtot}</span>
          </div>
          <div className="receipt-taxes">
            <span className="label">Taxes and Fees</span>
            <span></span>
            <span></span>
            <span className="center">{"$" + taxes}</span>
          </div>
          <div className="receipt-total">
            <span className="label">Total</span>
            <span></span>
            <span></span>
            <span className="center total-price">{"$" + total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="cart-product-name"></div>
// <div className="cart-product-quantity"></div>
// <div className="subtotal"></div>
// <div className="total-price"></div>
// <div className="notification"></div>
