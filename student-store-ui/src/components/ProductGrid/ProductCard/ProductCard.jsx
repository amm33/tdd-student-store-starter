import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + product.id}>
          <img src={product.image} />
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{product.name}</p>
          <div className="stars">
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star_half</i>
          </div>
          <p className="product-price"> {"$" + product.price.toFixed(2)}</p>
        </div>
        <div className="actions">
          <div className="description">
            {showDescription ? (
              <p className="product-description">{product.description}</p>
            ) : null}
          </div>
          <div className="buttons">
            <button
              className="add"
              onClick={() => handleAddItemToCart(product.id)}
            >
              {" "}
              <i className="material-icons">add</i>
            </button>
            <button
              className="remove"
              onClick={() => handleRemoveItemFromCart(product.id)}
            >
              {" "}
              <i className="material-icons">remove</i>
            </button>
          </div>

          {quantity ? (
            <span className="product-quantity">{quantity}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
